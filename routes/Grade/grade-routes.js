const router = require("express").Router();
const Controller = require("../../controller/grade/gradeController");

router.route("/addgrade").post(Controller.addgrade);
router.route("/getallgrade").get(Controller.getallgrade);
router.route("/getgrade/:id").get(Controller.getgrade);
router.route("/updategrade/:id").put(Controller.updategradebyid);
router.route("/deletegrade/:id").delete(Controller.deletegradebyid);

module.exports = router;
