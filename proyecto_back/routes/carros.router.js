const express = require("express");
const router = express.Router();
const carrosController = require("../controllers/carros.controller");

router.post("/", carrosController.create)
router.get("/", carrosController.find)
router.get("/:id", carrosController.findOne)
router.put("/:id", carrosController.update)
router.delete("/:id", carrosController.remove)
module.exports = router
