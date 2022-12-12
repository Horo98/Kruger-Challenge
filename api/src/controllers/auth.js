const { Router } = require("express");
const { User } = require("../db.js");
const authController = require("../middlewares/authNuevo");
const passport = require("passport");
const jwt = require("jsonwebtoken");

//asd
const router = Router();

router.post(
  "/register",
  // passport.authenticate("jwt", { session: false }),
  authController.register
);
router.post(
  "/login",
  // passport.authenticate("jwt", { session: false }),
  authController.login
);
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  authController.protectedRoute
);
router.get("/logout", authController.logout);




module.exports = router;
