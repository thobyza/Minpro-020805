const db = require('../models');
const Category = db.Category;

module.exports = {
    createCategory: async (req, res) => {
        try {
            const result = await Category.create(req.body)
            res.status(200).send({ message: 'create event category success' }, result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    },

    getAll: async (req, res) => {
        try {
            const result = await Category.findAndCountAll()
            res.status(200).send(result)
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: err.message })
        }
    }
}


