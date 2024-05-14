// controllers/user.js
const User = require('../models/User');

exports.postUserDetails = async (req, res, next) => {
    console.log("in postUserDetails");
    console.log(req.body);
    try {
        const { Name, Email, Password } = req.body;
        console.log(Name, Email, Password);
        
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
