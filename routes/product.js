import express from "express";
import { addNewProduct, getAllProducts } from "../controllers/Product";
import productImagesUpload from "../middleware/productMulter";

const productsRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       required:
 *         - title
 *         - productImage
 *         - price
 *         - categoryId
 *         - userId
 *         - Longitude
 *         - Latitude
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the product
 *         productImage:
 *           type: string
 *           format: binary
 *           description: The product image
 *         price:
 *           type: string
 *           description: The price of the product
 *         categoryId:
 *           type: string
 *           description: The category id of the product
 *         userId:
 *           type: string
 *           description: The user id of the product
 *         Longitude:
 *           type: string
 *           description: The Longitude of the user location
 *         Latitude:
 *           type: string
 *           description: The Latitude of the user location
 *       example:
 *         title: "Red jacket"
 *         productImage: "jacket.jpg"
 *         price: 100
 *         categoryId: 5
 *         userId: 1
 *         Longitude: "30.0474° E"
 *         Latitude: "-1.9706° S"
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * /AguraMarket/products/addNewProduct:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/products'
 *
 *     responses:
 *       200:
 *          description: The product created successfully
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/products'
 *       500:
 *          description: Internal Server Error
 */

productsRouter.post("/addNewProduct", productImagesUpload, addNewProduct);

/**
 * @swagger
 *  /AguraMarket/products/getAllProducts:
 *   get:
 *     summary: Returns the list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *          description: The products found successfully
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/products'
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

productsRouter.get("/getAllProducts", getAllProducts);

export default productsRouter;
