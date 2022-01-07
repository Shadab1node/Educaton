let router = require("express").Router();
var Controller = require("../../controller/topic/topicController");
router.route("/addtopic").post(Controller.addtopic);
router.route("/getalltopic").get(Controller.getalltopic);
router.route("/gettopicbyid/:id").get(Controller.gettopicbyid);
router.route("/updatetopic/:id").put(Controller.updatetopic);
router.route("/deletetopic/:id").delete(Controller.deletetopic);

module.exports = router;
