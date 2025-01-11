import mongoose from "mongoose";
import validator from validator;
import { unique } from "next/dist/build/utils";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please entered the name"],
    unique: true,
    trim: true,
  },
  email:{
    type:String,
    required:[true,'please entered the email'],
    unique:true,
    trim:true,
    lowercase:true,
    validate:[validator.isEmail,'please entered valid email']
  }
});
