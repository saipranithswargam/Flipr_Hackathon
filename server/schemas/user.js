require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passport=require("passport");

const UserSchema = new Schema({
  email:String,
  password:String,
  googleId:String,
  githubId:String,
},
);



module.exports = UserSchema;
