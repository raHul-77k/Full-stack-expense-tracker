const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        
        if (!token) {
            return res.status(401).json({ success: false, message: 'Authorization header missing' });
        }

        const tokenParts = token.split(' ');

        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            throw new Error('Invalid token format');
        }

        const user = jwt.verify(tokenParts[1], 'secretKey');
        const userId = user.userId;
        console.log('userId>>>>',userId);

        User.findByPk(userId)
            .then(user => {
                if (!user) {
                    return res.status(401).json({ success: false, message: 'User not found' });
                }

                // Attach user details to the request object
                req.user = user;
                next();
            })
            .catch(error => {
                console.log('Error in fetching user details:', error);
                return res.status(500).json({ success: false, message: 'Internal server error' });
            });
    } catch (error) {
        console.log('Error in authentication:', error);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = {
    authenticate
};
