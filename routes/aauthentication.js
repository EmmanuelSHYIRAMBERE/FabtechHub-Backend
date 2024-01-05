import express from "express";
import {
  changePwd,
  forgotPassword,
  resetPassword,
} from "../controllers/Authentication";
import { verifyToken } from "../middleware";

const authenticate = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     changePassword:
 *       type: object
 *       required:
 *         - existingPassword
 *         - newPassword
 *       properties:
 *         existingPassword:
 *           type: string
 *           description: The current password of the user
 *         newPassword:
 *           type: string
 *           description: A new password of the user
 *       example:
 *         existingPassword: 1234@2Password
 *         newPassword: 1234@!myPassword
 *     forgotPassord:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *       example:
 *         email: email@example.com
 *     resetPassword:
 *       type: object
 *       required:
 *         - email
 *         - OTP
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         OTP:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The confirmation password of the user
 *       example:
 *         email: "email@example.com"
 *         OTP: "123412"
 *         password: "1234@!myNewPassword"
 */

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: The user authentication managing API
 */

/**
 * @swagger
 * /AguraMarket/password/changepassword:
 *   patch:
 *     summary: Change current password
 *     tags: [Authentication]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/changePassword'
 *     responses:
 *       201:
 *          description: The new password was successfully changed
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/changePassword'
 *       401:
 *          description: wrong email or password credentials!
 *       404:
 *          description: User not found
 *       500:
 *          description: Internal Server Error
 */

authenticate.patch("/changepassword", verifyToken, changePwd);

/**
 * @swagger
 * /AguraMarket/password/forgotpassword:
 *   post:
 *     summary: Forgot password
 *     tags: [Authentication]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/forgotPassord'
 *     responses:
 *       200:
 *          description: Password reset OTP sent to your email
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/forgotPassord'
 *       404:
 *          description: User not found
 *       500:
 *          description: Internal Server Error
 */
authenticate.post("/forgotpassword", forgotPassword);

/**
 * @swagger
 * /AguraMarket/password/resetpassword:
 *   patch:
 *     summary: Reset password
 *     tags: [Authentication]
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/resetPassword'
 *     responses:
 *       201:
 *          description: The new password was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/resetPassword'
 *       401:
 *          description: Invalid OTP!
 *       404:
 *          description: User not found
 *       500:
 *          description: Internal Server Error
 */

authenticate.patch("/resetpassword", resetPassword);

export default authenticate;
