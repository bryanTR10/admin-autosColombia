const Vehicle = require("../models/pago");

const createPago = async (req, res) => {
    try {
        const newPago = new Pago(req.body);
        await newPago.save();
        res.status(201).json(newPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createPago
};