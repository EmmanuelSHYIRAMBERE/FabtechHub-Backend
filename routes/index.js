import express from "express";
import errorHandler from "../utilities/errorHandlerClass";
import { globalErrorController } from "../controllers/Errors";
import productsRouter from "./product";

const systemRouter = express.Router();

systemRouter.use("/products", productsRouter);

systemRouter.all("*", (req, res, next) => {
  next(new errorHandler(`Failure connecting to the server!`, 404));
});

systemRouter.use(globalErrorController);

export default systemRouter;
