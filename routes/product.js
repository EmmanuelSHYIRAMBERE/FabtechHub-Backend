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
 *         - images
 *         - price
 *         - categoryId
 *         - userId
 *         - location
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the product
 *           example: "Red jacket"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *             format: binary
 *           description: The product images (file upload)
 *           example: ["url:jacket.jpg", "thumbNailUrl"]
 *         price:
 *           type: string
 *           description: The price of the product
 *           example: "100"
 *         categoryId:
 *           type: string
 *           description: The category id of the product
 *           example: "5"
 *         userId:
 *           type: string
 *           description: The user id of the product
 *           example: "1"
 *         location:
 *           type: string
 *           description: The user latitude and longitude
 *           example: "-1.9706° S,30.0474° E"
 *         description:
 *           type: string
 *           description: The product description
 *           example: "This is a good product you can afford easily."
 *       example:
 *         title: "Red jacket"
 *         images: ["url:jacket.jpg", "thumbNailUrl"]
 *         price: "100"
 *         categoryId: "5"
 *         userId: "1"
 *         location: "-1.9706° S,30.0474° E"
 *         description: "This is a good product you can afford easily."
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
 *       201:
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
