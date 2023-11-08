const { userController } = require("../controllers");
const { verifyToken } = require("../middleware/auth");
const router = require("express").Router();
const { multerUpload } = require("../middleware/multer");

router.get("/", userController.getAll);
router.get("/img", verifyToken, userController.getImg);
router.post("/", userController.register);
router.post("/login", userController.login);
router.get("/keep-login", verifyToken, userController.keepLogin);
router.patch(
  "/:id",
  verifyToken,
  multerUpload().single("img"),
  userController.editUsers
);

module.exports = router;
