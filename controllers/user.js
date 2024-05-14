// controllers/user.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.postUserDetails = async (req, res, next) => {
    console.log("in postUserDetails");
    console.log(req.body);
    try {
        const { Name, Email, Password } = req.body;
        console.log(Name, Email, Password);

        // Check if the email already exists
        const existingUser = await User.findOne({ where: { Email } });
        if (existingUser) {
            console.log("User already exists");
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);
        
        const data = await User.create({
            Name: Name,
            Email: Email,
            Password: Password,
        });
        
        res.status(200).json({ userData: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

exports.postLoginDetails = async (req, res, next) => {
    console.log("in postLoginDetails");
    console.log(req.body);
    try {
        const { Email, Password } = req.body;
        console.log(Email, Password);

        // Check if the user exists
        const user = await User.findOne({ where: { Email } });
        if (!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        console.log("Login successful");
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};