import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  Longitude: {
    type: String,
    required: true,
  },
  Latitude: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

export const Product = mongoose.model("Product", productSchema);
