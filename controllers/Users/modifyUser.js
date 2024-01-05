import { User, Admin } from "../../model";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const modifyUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    const admin = await Admin.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!admin) {
      return next(new errorHandler(`A user with ID: ${id} not found`, 404));
    }

    res.status(200).json({
      message: `A user with ID: ${id}, modified successfully to:`,
      ...req.body,
      image: req.file.path,
    });

    return;
  }

  res.status(200).json({
    message: `A user with ID: ${id}, modified successfully to:`,
    ...req.body,
    image: req.file.path,
  });
});
