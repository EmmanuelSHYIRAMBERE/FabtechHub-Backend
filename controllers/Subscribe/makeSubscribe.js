import { sendEmail } from "../../middleware/sendEmail";
import { Subscribe } from "../../model";
import { catchAsyncError } from "../../utilities";

export const makeSubscribe = catchAsyncError(async (req, res, next) => {
  const subscribe = await Subscribe.create(req.body);

  const { email } = req.body;

  const fullNames = `Not stated`;

  const message = "User subscribed to Fab Tech Hub";

  sendEmail(email, fullNames, message);

  res.status(201).json({
    message: "Subscibed successfully. Thank you for your work.",
    data: { subscribe },
  });
});
