const { sequelize } = require('../config/database');
const Snippet = require('./Snippet');

// Export models and sequelize instance
module.exports = {
  sequelize,
  Snippet,
};
