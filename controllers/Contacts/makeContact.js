import { Contact } from "../../model/contactModel";
import { catchAsyncError } from "../../utilities";

export const makeContact = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({
    message:
      "Dear valued user, your feedback sent successfully. Thank you for connect with FabtechHub.",
    data: { contact },
  });
});
