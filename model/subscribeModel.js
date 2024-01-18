import mongoose from "mongoose";

const subcribeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
  dateSent: {
    type: Date,
    default: Date.now,
  },
});

export const Subscribe = mongoose.model("Subscribe", subcribeSchema);
