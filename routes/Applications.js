import express from "express";
import { verifyToken, admin } from "../middleware";
const applicationsRouter = express.Router();


import {
  createNewApplication,
  getAllApplications,
} from "../controllers/Application";
import fileUpload from "../middleware/fileUploadMulter";

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     application:
 *       type: object
 *       required:
 *         - Firstname
 *         - Lastname
 *         - email
 *         - phoneNumber
 *         - file
 *         - yearsOfExperience
 *         - description
 *       properties:
 *         Firstname:
 *           type: string
 *           description: The first name of the applicant
 *           default: John
 *         Lastname:
 *           type: string
 *           description: The last name of the applicant
 *           default: Doe
 *         email:
 *           type: string
 *           description: The email of the applicant
 *           default: john.doe@example.com
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the applicant
 *           default: "+1234567890"
 *         file:
 *           type: string
 *           format: binary
 *           description: The file URL uploaded by the applicant
 *           default: "https://example.com/uploads/file123.pdf"
 *         yearsOfExperience:
 *           type: string
 *           description: The years of experience of the applicant
 *           default: "5"
 *         description:
 *           type: string
 *           description: Additional description provided by the applicant
 *           default: "I have experience in..."
 *       example:
 *         Firstname: John
 *         Lastname: Doe
 *         email: john.doe@example.com
 *         phoneNumber: "+1234567890"
 *         file: "https://example.com/uploads/file123.pdf"
 *         yearsOfExperience: "5"
 *         description: "I have experience in..."
 */

/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: The applications managing API
 */

/**
 * @swagger
 * /FabtechHub/application/viewApplications:
 *   get:
 *     summary: Returns all the applications made
 *     tags: [Applications]
 *     responses:
 *       200:
 *          description: Found
 *          content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/application'
 *       403:
 *          description: The user not authorised
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal Server Error
 */

applicationsRouter.get("/viewApplications", getAllApplications);

/**
 * @swagger
 * /FabtechHub/application/newApplication:
 *   post:
 *     summary: Create a new application
 *     tags: [Applications]
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/application'
 *     responses:
 *       201:
 *          description: The new application successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/application'
 *       500:
 *          description: Internal Server Error
 */

applicationsRouter.post("/newApplication", fileUpload, createNewApplication);

export default applicationsRouter;
