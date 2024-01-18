import express from "express";

import applicationsRouter from "./Applications";
import contactsRouter from "./Contacts";
import errorHandler from "../utilities/errorHandlerClass";
import { globalErrorController } from "../controllers/Errors";
import usersRouter from "./accessUsers";

const systemRouter = express.Router();

systemRouter.use("/application", applicationsRouter);
systemRouter.use("/contacts", contactsRouter);
systemRouter.use("/users", usersRouter);

systemRouter.all("*", (req, res, next) => {
  next(new errorHandler(`Failure connecting to the server!`, 404));
});

systemRouter.use(globalErrorController);

export default systemRouter;
