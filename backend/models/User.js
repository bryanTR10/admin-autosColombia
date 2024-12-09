const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: String,
    telf: Number,
    entradaTime: Date,
    exitTime: Date,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);