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
      type: String, 
      default: "",
    },
    birthMonth: {
      type: String, 
      default: "",
    },
    birthYear: {
      type: String, 
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
