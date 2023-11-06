const { cityController } = require("../controllers");
const router = require("express").Router();

router.get("/", cityController.getAllCity);
router.post("/", cityController.createCity);

module.exports = router;
