import { API_BASE_URL } from '../constants';

/**
 * API service for snippet operations
 */
const api = {
  /**
   * Create a new snippet
   * @param {Object} snippetData - { code, language, theme }
   * @returns {Promise<Object>} - { id, code, language, theme }
   */
  async createSnippet(snippetData) {
    const response = await fetch(`${API_BASE_URL}/snippets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(snippetData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create snippet');
    }

    return response.json();
  },

  /**
   * Get a snippet by ID
   * @param {string} id - Snippet ID
   * @returns {Promise<Object>} - { id, code, language, theme }
   */
  async getSnippet(id) {
    const response = await fetch(`${API_BASE_URL}/snippets/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Snippet not found');
      }
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch snippet');
    }

    return response.json();
  },

  /**
   * Health check
   * @returns {Promise<Object>}
   */
  async healthCheck() {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },
};

export default api;
