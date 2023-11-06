const { referralController } = require("../controllers");
const router = require("express").Router();
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, referralController.getReferrals);

module.exports = router;
