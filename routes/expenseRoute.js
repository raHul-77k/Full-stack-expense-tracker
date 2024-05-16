const express = require('express');
const router = express.Router();
const expenseControllers = require('../controllers/expense');


router.post('/addexpense', expenseControllers.addExpense);
router.get('/getexpense', expenseControllers.getExpenses);
router.delete('/deleteexpense/:id', expenseControllers.deleteExpense);

module.exports = router;