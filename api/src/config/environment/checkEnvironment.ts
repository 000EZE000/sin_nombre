import * as environments from "./";
import { logger } from "../logger";
import { readFileSync } from "fs";

(() => {
  const value = environments as any;
  let error = false;
  for (let env in value) {
    if (
      value[env] === null ||
      value[env] === undefined ||
      value[env] === "undefined" ||
      value[env] === ""
    ) {
      logger.error(`[FAIL] ${env}`);
      logger.error(`missing is environment ${env}`);
      error = true;
    }
  }
  if (error) {
    logger.warn(
      "the database did not start due to lack of environment variables",
    );
    try {
      logger.warn(
        `see the '.env.example' file in the root folder \n` +
          ` or this is environment variables \n ${readFileSync(
            "./.env.example",
          )} `,
      );
    } catch (error: any) {
      logger.fatal("contact developer");
    }
    process.exit(1);
  }
})();
