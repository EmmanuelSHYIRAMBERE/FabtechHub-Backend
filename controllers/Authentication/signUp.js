import { hashPwd } from "../../utilities";
import { User } from "../../model";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const signUp = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    return next(
      new errorHandler(
        `user with the email: ${user.email} already exists, try others`,
        409
      )
    );
  }

  let hashedPwd = await hashPwd(req.body.password);

  req.body.password = hashedPwd;

  let newUser = await User.create(req.body);

  res.status(201).json({
    message: "user registerd successfully.",
    data: {
      userId: newUser._id,
      Names: newUser.fullNames,
      Email: newUser.email,
      phoneNo: newUser.phoneNo,
      location: newUser.location,
      expoPushToken: newUser.expoPushToken,
      role: newUser.role,
    },
  });
});
