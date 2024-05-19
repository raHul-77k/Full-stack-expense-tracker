const express = require('express');
const router = express.Router();
const expenseControllers = require('../controllers/expense');
const userAuthenticate = require('../middleware/auth');


router.post('/addexpense',userAuthenticate.authenticate, expenseControllers.addExpense);
router.get('/getexpense',userAuthenticate.authenticate, expenseControllers.getExpenses);
router.delete('/deleteexpense/:id',userAuthenticate.authenticate, expenseControllers.deleteExpense);

module.exports = router;