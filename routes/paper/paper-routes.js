let router = require("express").Router();
var Controller = require("../../controller/paper/paperController");
router.route("/addpaper").post(Controller.addpaper);
router.route("/getallpaper").get(Controller.getallpaper);
router.route("/getpaperbyid/:id").get(Controller.getpaperbyid);
router.route("/updatepaper/:id").put(Controller.updatepaper)
router.route("/deletepaper/:id").delete(Controller.deletepaper)

module.exports = router;
