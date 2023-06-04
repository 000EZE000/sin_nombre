import app from "./app";
import { PORT } from "./config/environment";
import { logger } from "./config/logger";

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}/dev/`);
});
