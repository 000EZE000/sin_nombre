import { Express } from "express";
import { NODE_ENV } from "../environment";
import morgan from "morgan";

export const initMorgan = (app: Express) =>
  NODE_ENV === "development" && app.use(morgan("dev"));
