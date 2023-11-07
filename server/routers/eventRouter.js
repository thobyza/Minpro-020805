const { eventController } = require('../controllers')
const router = require('express').Router()
const { multerUpload } = require('../middleware/multer')

router.post('/', multerUpload().single('img'), eventController.createEvent);
router.get('/', eventController.getAll);
router.get('/upcoming', eventController.getUpcomingEvent);
router.get('/by-category', eventController.getByCategory);
router.get('/by-city', eventController.getByCity);
router.get('/detail', eventController.getById);

module.exports = router