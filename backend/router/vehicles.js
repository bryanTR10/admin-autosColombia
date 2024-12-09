const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleControllers");

router.post("/", vehicleController.createVehicle);


module.exports = router;