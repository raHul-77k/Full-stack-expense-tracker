const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = require('./User');

const Expense = sequelize.define('Expense', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Expense;
