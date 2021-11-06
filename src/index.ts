import "dotenv-safe/config";
import { logger } from "./logger";

/* main */
(async () => {
  logger.info("Hello world!");
  logger.warn("Hello world!");
  logger.error("Hello world!");
  logger.debug("Hello world!");
  logger.data("Hello world!");
})();
