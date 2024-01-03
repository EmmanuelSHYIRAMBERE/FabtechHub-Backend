import { catchAsyncError } from "../../utilities/catchSync.js";
import cloudinary from "../../utilities/cloudinary";
import { Product } from "../../model/productModel.js";

export const addNewProduct = catchAsyncError(async (req, res, next) => {
  const url = await cloudinary.uploader.upload(req.files["url"][0].path);
  const thumbnailUrl = await cloudinary.uploader.upload(
    req.files["thumbnailUrl"][0].path
  );

  const product = await Product.create({
    ...req.body,
    url: url.secure_url,
    thumbnailUrl: thumbnailUrl.secure_url,
  });

  return res.status(201).json({
    status: "A new product added successfully",
    product,
  });
});
