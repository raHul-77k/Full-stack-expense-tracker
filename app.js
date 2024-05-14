// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static('public'));

// Use userRoutes for /user route
app.use('/user', userRoutes);

// Sync the database
sequelize.sync({force : true})
    .then(() => {
        console.log('Database synced successfully.');

        // Start the server after the database is synced
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
