import { User } from "../../model";
import { comparePwd, getToken } from "../../utilities";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const logIn = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!req.body.email || !req.body.password) {
    return next(new errorHandler("Please provide email and password", 400));
  }

  if (!user) {
    return next(
      new errorHandler(`user with this email not found, try others`, 404)
    );
  }

  let isPwdMatch = await comparePwd(req.body.password, user.password);

  if (!isPwdMatch) {
    return next(new errorHandler(`wrong password!`, 401));
  }

  let token = getToken({ _id: user._id, email: user.email });

  res.status(200).json({
    message: "Authorised!",
    access_token: token,
    user: {
      userId: user._id,
      email: user.email,
      fullNames: user.fullNames,
      phoneNo: user.phoneNo,
      location: user.location,
      role: user.role,
    },
  });
});
