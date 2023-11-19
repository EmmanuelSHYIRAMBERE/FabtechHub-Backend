import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
