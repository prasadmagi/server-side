const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
require('dotenv').config()
const cors = require('cors');
const PORT = process.env.PORT || 4000;
connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,

    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

connectDB();



app.use(cors());
app.use(express.json());
app.use("/users", router)

app.listen(PORT, () => {
  console.log(`App listen on ${PORT} port`);
});
