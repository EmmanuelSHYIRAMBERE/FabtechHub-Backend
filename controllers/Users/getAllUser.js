// export const getAllUser = (req, res) => {
//   res.status(200).json(res.paginatedResults);
// };

import { User } from "../../model";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await User.find({});

  if (!users) {
    return next(new errorHandler(`Nothing found in database`, 404));
  }

  res.status(200).json(users);
});
