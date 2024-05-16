const Expense = require('../models/Expense');

// Add Expense
exports.addExpense = async (req, res, next) => {
    try {
        const { amount, description, category } = req.body;

        const expense = await Expense.create({
            amount,
            description,
            category
        });

        res.status(200).json({ message: 'Expense added successfully', expense });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};

// Get Expenses
exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res, next) => {
    try {
        const expenseId = req.params.id;
        const result = await Expense.destroy({ where: { id: expenseId } });

        if (result) {
            res.status(200).json({ message: 'Expense deleted successfully' });
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};
