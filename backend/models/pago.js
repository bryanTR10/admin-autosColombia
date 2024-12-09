const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    pagoTime: Date,
    precio: Date,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);