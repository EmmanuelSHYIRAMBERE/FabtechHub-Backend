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
  fileFilter: function (req, file, callback) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      callback(null, true);
    } else {
      // prevent to upload files
      console.log("only jpeg & png supported!");
      callback(null, false);
    }
  },
});

const productImagesUpload = upload.fields([
  { name: "backDropImage", maxCount: 1 },
  { name: "gallery", maxCount: 15 },
]);

export default productImagesUpload;
