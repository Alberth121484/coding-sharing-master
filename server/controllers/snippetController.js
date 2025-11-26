const { Snippet } = require('../models');

/**
 * Create a new snippet
 * POST /api/snippets
 * @body {string} code - The code content (required)
 * @body {string} language - Programming language (default: 'html')
 * @body {string} theme - Editor theme (default: 'light')
 * @returns {object} - Created snippet with id
 */
const createSnippet = async (req, res, next) => {
  try {
    const { code, language = 'html', theme = 'light' } = req.body;

    // Validate required fields
    if (!code || code.trim() === '') {
      return res.status(400).json({ 
        error: 'Code is required',
        field: 'code'
      });
    }

    // Create snippet
    const snippet = await Snippet.create({
      code: code.trim(),
      language,
      theme,
    });

    // Return created snippet
    res.status(201).json({
      id: snippet.id,
      code: snippet.code,
      language: snippet.language,
      theme: snippet.theme,
      createdAt: snippet.created_at,
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: error.errors[0]?.message || 'Validation error',
        field: error.errors[0]?.path,
      });
    }
    next(error);
  }
};

/**
 * Get a snippet by ID
 * GET /api/snippets/:id
 * @param {string} id - Snippet UUID
 * @returns {object} - Snippet data
 */
const getSnippetById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate UUID format
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(id)) {
      return res.status(400).json({ 
        error: 'Invalid snippet ID format' 
      });
    }

    // Find snippet
    const snippet = await Snippet.findByPk(id);

    if (!snippet) {
      return res.status(404).json({ 
        error: 'Snippet not found' 
      });
    }

    // Return snippet data
    res.json({
      id: snippet.id,
      code: snippet.code,
      language: snippet.language,
      theme: snippet.theme,
      createdAt: snippet.created_at,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSnippet,
  getSnippetById,
};
