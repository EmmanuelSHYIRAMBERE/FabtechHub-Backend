import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateSent: {
    type: Date,
    default: Date.now,
  },
});

export const Applications = mongoose.model("Applications", contactSchema);
