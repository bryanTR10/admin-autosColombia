const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    plate: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    entryTime: Date,
    exitTime: Date,
    cell: String
});

module.exports = mongoose.model("Vehicle", vehicleSchema);