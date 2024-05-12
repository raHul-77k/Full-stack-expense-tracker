// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

router.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are mandatory!');
    }

    // You can add more validation here (e.g., validate email format)

    // If all fields are filled, you can proceed with signup logic here
    // For now, just send a success message
    res.send('Signup successful!');
});

module.exports = router;
