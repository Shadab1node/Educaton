const router = require("express").Router();
const Controller = require("../../controller/Board/boardController");

router.route("/addboard").post(Controller.addboard);
router.route("/getallboard").get(Controller.getallboards);
router.route("/getboard/:id").get(Controller.getboardbyid);
router.route("/updateboard/:id").put(Controller.updateboardbyid);
router.route("/deleteboard/:id").delete(Controller.deleteboardbyid);

module.exports = router;
