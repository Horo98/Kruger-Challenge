const { Router, json } = require("express");

const authController = require("../controllers/auth");
const userController = require("../controllers/users");


const router = Router();
router.use(json());


router.use("/users", userController);



router.use("/auth", authController);


module.exports = router;
