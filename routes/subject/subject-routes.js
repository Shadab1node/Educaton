let router = require("express").Router();
var Controller = require("../../controller/subject/subjectController");
router.route("/addsubject").post(Controller.addsubject);
router.route("/getallsubject").get(Controller.getallsubject);
router.route("/getsubjectbyid/:id").get(Controller.getsubjectbyid);
router.route("/updatesubject/:id").put(Controller.updatesubject);
router.route("/deletesubject/:id").delete(Controller.deletesubject);

module.exports = router;
