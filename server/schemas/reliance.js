require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relianceSchema = new Schema({

    Date: { type: String},
    Open: { type: String},
    High: { type: String},
    Low: { type: String},
    Close: { type: String},
    AdjClose: { type: String},
    Volume: { type: String},
  
    },
  
    { timestamps: true });
  
  const reliance = new mongoose.model("reliance", relianceSchema);

  module.exports = reliance;