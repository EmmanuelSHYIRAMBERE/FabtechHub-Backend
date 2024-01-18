import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import systemRouter from "./routes";

const app = express();

const PORT = process.env.PORT;

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "FabtechHub-Project API Documentation",
      version: "1.0.0",
      description:
        "This FabtechHub-Project API Documentation is designed to provide basics of how this API functions.",
    },
    servers: [
      {
        url: "http://localhost:7700",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/FabtechHub", systemRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/uploads", express.static("FabtechHub_images"));

mongoose
  .connect(process.env.DB_connect_devs)
  .then((res) => {
    console.log(`connected to mongo DB`);
    app.listen(PORT, () =>
      console.log(
        `FabtechHub project is running on port http://localhost:${PORT}`
      )
    );
  })
  .catch((error) => {
    console.log(error);
  });
