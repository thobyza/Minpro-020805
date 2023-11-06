const { userController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");
const router = require("express").Router();

router.get("/", userController.getAll);
router.post("/", userController.register);
router.post("/login", userController.login);
router.get("/keep-login", verifyToken, userController.keepLogin);
router.patch("/:id", verifyToken, userController.editUsers);

module.exports = router;
