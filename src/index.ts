import "dotenv-safe/config";
import winston from "winston";

/* logging setup */
const winstonColorConfig = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
  },
  colors: {
    error: "red",
    debug: "blue",
    warn: "yellow",
    data: "cyan",
    info: "green",
  },
};
winston.addColors(winstonColorConfig.colors);
const logConfiguration = {
  levels: winstonColorConfig.levels,
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss.SSS",
    }),
    winston.format.align(),
    winston.format.printf(
      (info) =>
        `\x1b[2m[${info.timestamp}]\x1b[0m [${info.level}] ${info.message}`
    )
  ),
};
const logger = winston.createLogger(logConfiguration);

/* main */
(async () => {
  logger.info("Hello world!");
  logger.warn("Hello world!");
  logger.error("Hello world!");
  logger.debug("Hello world!");
  logger.data("Hello world!");
})();
