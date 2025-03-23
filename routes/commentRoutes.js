const express = require('express');
const Comment = require('../models/commentModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

router.post('/', async (req, res) => {
  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
});

module.exports = router;
