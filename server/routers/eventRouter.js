const router = require('express').Router()
const { eventController } = require('../controllers');
const { verifyToken } = require('../middleware/auth');
const { multerUpload } = require('../middleware/multer')

router.post('/', verifyToken, multerUpload().single('img'), eventController.createEvent);
router.get('/', eventController.getAll);
router.get('/details/:id', eventController.getById);
router.get('/upcoming', eventController.getUpcomingEvent);
router.get('/by-category', eventController.getByCategory);
router.get('/by-city', eventController.getByCity);

module.exports = router