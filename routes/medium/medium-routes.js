const router = require("express").Router();
const Controller = require("../../controller/medium/mediumController");

router.route("/addmedium").post(Controller.addmedium);
router.route("/getallmedium").get(Controller.getallmedium);
router.route("/getmediumbyid/:id").get(Controller.getmediumbyid);
router.route("/updatemedium/:id").put(Controller.updatemedium);
router.route("/deletemedium/:id").delete(Controller.deletemedium);
module.exports = router;
