let router = require("express").Router();
// const userAuth = require("../middleware/userAuth");
var Controller = require("../../controller/admin/admincontroller");
router.route("/adminlogin").post(Controller.adminlogin);
router.route("/mailSend").post(Controller.mailSend);
router.route("/forgotPassword").post(Controller.forgotPassword);

module.exports = router;
