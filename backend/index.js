const vehicleRoutes = require("./router/vehicles");
const express = require("express")
const mongoose = require("mongoose");
const config = require("./config/config")

const app = express();
const port = process.env.PORT || 5000; 

const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true }) 
.then(() => console.log('Conectado a MongoDB')) 
.catch(err => console.error('Error al conectar a MongoDB', err));

app.use(express.json());
app.use("/api/vehicles", vehicleRoutes);

app.listen(port, () => {
     console.log(`Servidor corriendo en el puerto ${port}`); 
});