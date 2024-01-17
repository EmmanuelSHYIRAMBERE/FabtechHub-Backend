import { Tours } from "../../models/tourModel.js";
import { catchAsyncError } from "../../utility/catchSync.js";
import cloudinary from "../../utility/cloudinary.js";

export const addNewTour = catchAsyncError(async (req, res, next) => {
  const backDropImage = await cloudinary.uploader.upload(
    req.files["backDropImage"][0].path
  );

  if (req.files["gallery"]) {
    for (let index = 0; index < req.files["gallery"].length; index++) {
      tourImagesArray.push(
        await cloudinary.uploader.upload(req.files["gallery"][index].path)
      );
    }
  }

  const newTour = await Tours.create({
    ...req.body,
    backDropImage: backDropImage.secure_url,
  });
  return res.status(201).json({
    status: "Tour created successfully",
    data: { newTour },
  });
});
