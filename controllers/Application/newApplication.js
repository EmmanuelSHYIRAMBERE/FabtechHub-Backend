import { Applications } from "../../model";
import { catchAsyncError } from "../../utilities";
import cloudinary from "../../utilities/cloudinary";

export const createNewApplication = catchAsyncError(async (req, res, next) => {
  let {
    Firstname,
    Lastname,
    email,
    phoneNumber,
    yearsOfExperience,
    description,
  } = req.body;

  let file = "";

  if (req.file) {
    const uploadedFile = await cloudinary.uploader.upload(req.file.path);
    file = uploadedFile.secure_url;
  }

  const newApplication = await Applications.create({
    Firstname,
    Lastname,
    email,
    phoneNumber,
    file,
    yearsOfExperience,
    description,
  });

  res.status(201).json({
    message: "The new application created successfully ",
    newApplication,
  });
});
