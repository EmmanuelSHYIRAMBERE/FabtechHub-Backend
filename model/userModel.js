import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullNames: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  expoPushToken: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
