const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { sequelize } = require('../config/database');

/**
 * Snippet Model
 * Stores code snippets with language and theme preferences
 */
const Snippet = sequelize.define('Snippet', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Code cannot be empty',
      },
    },
  },
  language: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'html',
    validate: {
      isIn: {
        args: [[
          'html', 'css', 'javascript', 'typescript', 'json', 'markdown',
          'python', 'java', 'csharp', 'cpp', 'php', 'ruby', 'go', 'rust', 'sql'
        ]],
        msg: 'Invalid language',
      },
    },
  },
  theme: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'light',
    validate: {
      isIn: {
        args: [['light', 'vs-dark']],
        msg: 'Invalid theme',
      },
    },
  },
}, {
  tableName: 'snippets',
  timestamps: true,
  underscored: true,
  indexes: [
    {
      fields: ['created_at'],
    },
  ],
});

module.exports = Snippet;
