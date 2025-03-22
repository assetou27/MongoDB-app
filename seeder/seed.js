const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Load env vars
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Sample data
const users = [
  {
    username: 'johndoe',
    email: 'john@example.com',
    password: 'password123'
  },
  // Add more users...
];

const posts = [
  {
    title: 'First Post',
    content: 'This is my first post',
    // We'll set author dynamically after inserting users
    likes: 5,
    tags: ['first', 'introduction']
  },
  // Add more posts...
];

const comments = [
  {
    content: 'Great post!',
    // We'll set post and user IDs dynamically after inserting users and posts
  },
  // Add more comments...
];

// Import data into DB
const importData = async () => {
  try {
    // Clear all existing data
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
    
    // Insert users
    const createdUsers = await User.insertMany(users);
    
    // Add user IDs to posts
    const samplePosts = posts.map((post, index) => {
      return { 
        ...post, 
        author: createdUsers[index % createdUsers.length]._id 
      };
    });
    
    // Insert posts
    const createdPosts = await Post.insertMany(samplePosts);
    
    // Add user and post IDs to comments
    const sampleComments = comments.map((comment, index) => {
      return { 
        ...comment, 
        post: createdPosts[index % createdPosts.length]._id,
        user: createdUsers[index % createdUsers.length]._id
      };
    });
    
    // Insert comments
    await Comment.insertMany(sampleComments);
    
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// Delete all data from DB
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();
    await Comment.deleteMany();
    
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// Call the appropriate function based on command line args
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}