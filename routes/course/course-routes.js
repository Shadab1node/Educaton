let router = require("express").Router();
var Controller = require("../../controller/course/courseController");
router.route("/addcourse").post(Controller.addcourse);
router.route("/getallcourse").get(Controller.getallcourse);
router.route("/getcoursebyid/:id").get(Controller.getcoursebyid);
router.route("/updatecourse/:id").put(Controller.updatecourse);
router.route("/deletecourse/:id").delete(Controller.deletecourse);

module.exports = router;
