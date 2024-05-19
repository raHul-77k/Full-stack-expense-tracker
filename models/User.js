// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../util/database'); // Import the sequelize instance

const User = sequelize.define('User', {
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'User',
});

module.exports = User;