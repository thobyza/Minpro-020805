const { eventController } = require('../controllers')
const router = require('express').Router()
const { multerUpload } = require('../middleware/multer')

router.post('/', multerUpload().single('img'), eventController.createEvent);
router.get('/', eventController.getAll)
router.get('/upcoming', eventController.getUpcomingEvent)

module.exports = router