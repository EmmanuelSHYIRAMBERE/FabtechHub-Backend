import express from "express";
import { verifyToken, admin } from "../middleware";
const subscribesRouter = express.Router();

import {
  createNewApplication,
  getAllApplications,
} from "../controllers/Application";
import fileUpload from "../middleware/fileUploadMulter";
import { getAllSubscribes, makeSubscribe } from "../controllers/Subscribe";

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     subscribe:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the applicant
 *           default: youremail@example.com
 *       example:
 *         email: youremail@example.com
 */

/**
 * @swagger
 * tags:
 *   name: Subscribes
 *   description: The subscribes managing API
 */

/**
 * @swagger
 * /FabtechHub/subscribes/viewSubscribes:
 *   get:
 *     summary: Returns all subscribes made
 *     tags: [Subscribes]
 *     responses:
 *       200:
 *          description: Found
 *          content:
 *             application/json:
 *               schema:
 *                 items:
 *                   $ref: '#/components/schemas/subscribe'
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

subscribesRouter.get("/viewSubscribes", getAllSubscribes);

/**
 * @swagger
 * /FabtechHub/subscribes/makeSubscribe:
 *   post:
 *     summary: make subcribe
 *     tags: [Subscribes]
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/subscribe'
 *     responses:
 *       201:
 *          description: The new application successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/subscribe'
 *       500:
 *          description: Internal Server Error
 */

subscribesRouter.post("/makeSubscribe", makeSubscribe);

export default subscribesRouter;
