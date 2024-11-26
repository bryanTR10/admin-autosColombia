const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/autosColombia", {
    userNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error(err));