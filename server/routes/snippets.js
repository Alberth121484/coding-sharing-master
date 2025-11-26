const express = require('express');
const router = express.Router();
const { createSnippet, getSnippetById } = require('../controllers/snippetController');

// POST /api/snippets - Create a new snippet
router.post('/', createSnippet);

// GET /api/snippets/:id - Get snippet by ID
router.get('/:id', getSnippetById);

module.exports = router;
