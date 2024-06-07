const mongoose = require("mongoose");

// Profile schema
const addMembersSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
      default: null,
    },
    relationalshiptype: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      default: "",
    },
    middleName: {
      type: String,
      default: "",
    },
    surname: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "living",
    },
    birthDay: {
      type: String, // or use Number if storing as a number
      default: "",
    },
    birthMonth: {
      type: String, // or use Number if storing as a number
      default: "",
    },
    birthYear: {
      type: String, // or use Number if storing as a number
      default: "",
    },
    birthPlace: {
      type: String,
      default: "",
    },
    currentPlace: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const AddmembersModel = mongoose.model("AddmembersModel", addMembersSchema);
module.exports = AddmembersModel;
