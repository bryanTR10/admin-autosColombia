const Vehicle = require("../models/Vehicle");

const createVehicle = async (req, res) => {
    try {
        const newVehicle = new Vehicle(req.body);
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createVehicle
};