import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
  thumbnailUrl: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  categoryId: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: false,
  },
  Longitude: {
    type: String,
    required: false,
  },
  Latitude: {
    type: String,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export const Product = mongoose.model("Product", productSchema);
