import { catchAsyncError } from "../../utilities/catchSync.js";
import cloudinary from "../../utilities/cloudinary";
import { Product } from "../../model/productModel.js";

export const addNewProduct = catchAsyncError(async (req, res, next) => {
  let productImage = "";

  if (req.file) {
    productImage = await cloudinary.uploader.upload(req.file.path);
  }

  const product = await Product.create({
    ...req.body,
    productImage: productImage.secure_url,
  });

  return res.status(201).json({
    status: "A new product added successfully",
    product,
  });
});
