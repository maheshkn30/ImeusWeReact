const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AddmembersModel = require("./AddmembersModel");

const app = express();
app.use(express.json());
app.use(cors()); // Add cors middleware to allow all origins

// Route to handle POST request for adding member data
app.post("/addMember", async function (req, res) {
  try {
    const newMember = await AddmembersModel.create(req.body);
    res.status(200).json(newMember);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/demo")
  .then(function () {
    app.listen(3000, function () {
      console.log("Node API running successfully");
    });
    console.log("Mongoose connected");
  })
  .catch(function (err) {
    console.log(err);
  });
