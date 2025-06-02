const express = require("express");
const router = express.Router();
const authController = require("./controller");
const userValidator = require("../user/middleware");
const dataFilterHandler = require("../../common/dataFilterHandler");

router.post(
  "/register",
  userValidator(false),
  dataFilterHandler,
  authController.register
);
router.post("/login", authController.login);
router.post("/otp/send", authController.otpSend);
router.post("/otp/verify", authController.otpVerify);
router.post("/logout", authController.logout);

module.exports = router;
