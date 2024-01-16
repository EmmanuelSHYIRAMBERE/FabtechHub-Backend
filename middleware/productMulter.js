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
      callback(null, false);
    }
  },
});

const productImagesUpload = upload.fields([{ name: "images", maxCount: 3 }]);

export default productImagesUpload;
