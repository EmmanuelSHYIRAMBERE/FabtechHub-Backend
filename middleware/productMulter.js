import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "product_images");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const fileUpload = upload.fields([{ name: "images", maxCount: 3 }]);

export default fileUpload;
