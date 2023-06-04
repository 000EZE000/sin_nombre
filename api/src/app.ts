import "./config/environment/checkEnvironment";
import "./config/environment/checkModeRute";
import express, { json } from "express";
import { initMorgan } from "./config/morgan";
import { initCors } from "./config/cors";
const app = express();
app.use(json());

initCors(app);
initMorgan(app);

app.use("/", (req, res) => {
  res.status(200).json({ message: "init proyect" });
});

export default app;
