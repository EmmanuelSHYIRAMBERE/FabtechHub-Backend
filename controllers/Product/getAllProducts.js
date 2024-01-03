import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";
import { Product } from "../../model";

export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();

  if (!products || products.length === 0) {
    return next(new errorHandler(`You don't have any product registered`, 404));
  }

  res.status(200).json(products);
});
