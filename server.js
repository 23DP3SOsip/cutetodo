// npm install

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection problema"));
db.once("open", () => console.log("piekonektots pie MongoDB"));

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => console.log(`Serveris strada uz porta ${PORT}`));
