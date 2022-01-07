let router = require("express").Router();
let Controller = require("../../controller/Heading/headingController");

router.route("/addheading").post(Controller.addheading);
router.route("/getallheading").get(Controller.getallheading);
router.route("/getheadingbyid/:id").get(Controller.getheadingbyid);
router.route("/updatebyid/:id").put(Controller.updatebyid);
router.route("/deletebyid/:id").delete(Controller.deletebyid);

module.exports = router;
