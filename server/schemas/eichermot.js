require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eicherSchema = new Schema({

    Date: { type: String},
    Open: { type: String},
    High: { type: String},
    Low: { type: String},
    Close: { type: String},
    AdjClose: { type: String},
    Volume: { type: String},
  
    },
  
    { timestamps: true });
  
  const eichermot = new mongoose.model("eichermot", eicherSchema);

  module.exports = eichermot;