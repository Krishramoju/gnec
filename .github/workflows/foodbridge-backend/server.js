const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./.github/workflows/foodbridge-backend/.env" });


const foodRoutes = require("./routes/foodRoutes");
const ngoRoutes = require("./routes/ngoRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/foods", foodRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

