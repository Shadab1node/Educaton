let router = require("express").Router();
var Controller = require("../../controller/Question/questionController");
router.route("/addQuestion").post(Controller.addQuestion);
router.route("/getallquestion").get(Controller.getallquestion);
router.route("/getquestionbyid/:id").get(Controller.getquestionbyid);
router.route("/updatequestion/:id").put(Controller.updatequestion);
router.route("/deletequestion/:id").delete(Controller.deletequestion);

module.exports = router;
