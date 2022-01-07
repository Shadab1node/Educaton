let router = require("express").Router();
var Controller = require("../../controller/level/levelController");
router.route("/addLevel").post(Controller.addLevel);
router.route("/getalllevel").get(Controller.getalllevel);
router.route("/getlevel/:id").get(Controller.getlevel);
router.route("/updatelevel/:id").put(Controller.updatelevel);
router.route("/deletelevel/:id").delete(Controller.deletelevel);

module.exports = router;
