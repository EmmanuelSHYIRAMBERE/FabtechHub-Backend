import { User } from "../../model";
import { catchAsyncError, comparePwd, hashPwd } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const changePwd = catchAsyncError(async (req, res, next) => {
  const { existingPassword, newPassword } = req.body;

  const user = await User.findOne({ email: req.user.email });

  if (!user) {
    return next(new errorHandler.NotFoundError("Please log in first!"));
  }

  let pwdCheck = await comparePwd(existingPassword, user.password);

  if (!pwdCheck) {
    return next(new errorHandler("Incorrect password. Please try again.", 401));
  }

  let hashedPwd = await hashPwd(newPassword);

  user.password = hashedPwd;

  user.save();

  res.status(200).json({
    message: "Password changed successfully!",
  });
});
