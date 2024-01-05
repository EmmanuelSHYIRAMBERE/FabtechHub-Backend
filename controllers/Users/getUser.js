import { User, Admin } from "../../model";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const getSingleUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id });

  if (!user) {
    const admin = await Admin.findOne({ _id: id });

    if (!admin) {
      return next(new errorHandler(`A user with ID: ${id} not found`, 404));
    }

    res.status(200).json({ admin });
    return;
  }

  res.status(200).json({ user });
});
