import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import routes from "./routes/index.js";
import {
  errorConverter,
  errorHandler,
} from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1", routes);

app.use(errorConverter);
app.use(errorHandler);

export default app;
