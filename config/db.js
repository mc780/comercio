require('dotenv').config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
// || 'mongodb://localhost:27017/comercio';

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error.message);
    process.exit(1);
  }
};


module.exports = connectDB;