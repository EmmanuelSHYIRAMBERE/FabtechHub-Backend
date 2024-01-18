import { Subscribe } from "../../model";
import { Contact } from "../../model/contactModel";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const getAllSubscribes = catchAsyncError(async (req, res, next) => {
  const subscribes = await Subscribe.find({});

  if (!subscribes) {
    return next(new errorHandler(`No any subscribe made`, 404));
  }

  res.status(200).json(subscribes);
});
