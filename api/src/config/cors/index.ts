import { Express } from "express";
import cors from "cors";
import { NODE_ENV } from "../environment";

export const initCors = (app: Express) => {
  if (NODE_ENV === "development") app.use(cors());
};
