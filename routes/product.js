import express from "express";
import { addNewProduct, getAllProducts } from "../controllers/Product";
import productImagesUpload from "../middleware/productMulter";

const productsRouter = express.Router();

productsRouter.post("/addNewProduct", productImagesUpload, addNewProduct);

productsRouter.get("/getAllProducts", getAllProducts);

export default productsRouter;
