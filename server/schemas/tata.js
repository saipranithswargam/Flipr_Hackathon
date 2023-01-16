require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tataSchema = new Schema({

    Date: { type: String},
    Open: { type: String},
    High: { type: String},
    Low: { type: String},
    Close: { type: String},
    AdjClose: { type: String},
    Volume: { type: String},
  
    },
  
    { timestamps: true });
  
  const tata = new mongoose.model("tata", tataSchema);

  module.exports = tata;