const express = require("express");
const mongoose = require ("mongoose");

// Conexion a MongoDB
mongoose.connect("mongodb://localhost/autosColombia");

// Modelo de Vehiculo
const vehicleSchema = new mongoose.Shema({
    plate: String,
    owner: String,
    entryTime: Date,
    cell: String
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// Ruta para registrar la entrada de un vehiculo
app.post("/Vehicles", async (req, res) => {
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();
    res.json(newVehicle);
});

// ... otras rutas