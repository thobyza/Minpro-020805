const { categoryController } = require('../controllers')
const router = require('express').Router()

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAll)

module.exports = router