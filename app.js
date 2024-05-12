// app.js
const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes'); // Require userRoutes

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static('public'));

// Use userRoutes for /user/signup route
app.use('/user', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
