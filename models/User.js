// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database'); // Import the sequelize instance

const User = sequelize.define('User', {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;