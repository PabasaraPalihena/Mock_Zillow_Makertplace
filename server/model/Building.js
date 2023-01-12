const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Building = new Schema({
  streetAddress: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  zip: {
    type: String,
    require: true,
  },
  bCategory: {
    // aprtemnet,villas
    type: String,
    require: true,
  },
  type: {
    // sales,rent
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  features: {
    // beds,inches,bath
    type: String,
    require: true,
  },
  otherfacts: {
    // pet Park, play ground - inapartments
    type: String,
  },
  sampleImage: {
    type: String,
  },
});
const building = mongoose.model("Building", Building);
module.exports = building;
