import { Applications } from "../../model/applicationModel";
import { catchAsyncError } from "../../utilities";

export const getAllApplications = catchAsyncError(async (req, res, next) => {
  const allApplications = await Applications.find({});

  const totalApplications = allApplications.length;

  res.status(200).json({
    totalApplications: totalApplications,
    allApplications: allApplications,
  });
});
