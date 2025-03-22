# Blog API with MongoDB

A simple blog API built with Node.js, Express, and MongoDB.

## Features

- User management
- Blog posts with tags
- Comments on posts
- MongoDB validation and indexing for efficient queries

## API Routes

### Users

- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get single user
- POST `/api/users` - Create new user
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

### Posts

- GET `/api/posts` - Get all posts
- GET `/api/posts/:id` - Get single post
- POST `/api/posts` - Create new post
- PUT `/api/posts/:id` - Update post
- DELETE `/api/posts/:id` - Delete post

### Comments

- GET `/api/comments` - Get all comments
- GET `/api/comments/:id` - Get single comment
- POST `/api/comments` - Create new comment
- PUT `/api/comments/:id` - Update comment
- DELETE `/api/comments/:id` - Delete comment

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string
4. Seed the database: `npm run seed`
5. Start the server: `npm start`