const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./database/connectDb");
dotenv.config();
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/user", require("./route/userRoute"));
connectDb();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
