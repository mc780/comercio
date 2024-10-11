const mongoose = require("mongoose");

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    process.exit(1);
  }
};


module.exports = connectDB;