
import { Contact } from "../../model/contactModel";
import { catchAsyncError } from "../../utilities";
import errorHandler from "../../utilities/errorHandlerClass";

export const getContacts = catchAsyncError(async (req, res, next) => {
  const contact = await Contact.find({});

  if (!contact) {
    return next(new errorHandler(`No any contact us data in our records`, 404));
  }

  res.status(200).json(contact);
});
