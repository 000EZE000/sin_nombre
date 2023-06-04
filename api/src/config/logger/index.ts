import print from "pino";
import { NODE_ENV } from "../environment";
const bait = {
  message: "[LOGGER] production mode disabled",
  info() {
    console.log(this.message);
  },
  warn() {
    console.log(this.message);
  },
  error() {
    console.log(this.message);
  },
  fatal() {
    console.log(this.message);
  },
};
const log = () =>
  NODE_ENV === "development"
    ? print({
        transport: {
          target: "pino-pretty",
        },
        base: {
          pid: false,
        },
      })
    : bait;
export const logger = log();
