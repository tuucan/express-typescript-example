import { createLogger, format, transports } from "winston";

const isProd = process.env.NODE_ENV === "production";

const logger = createLogger({
  level: isProd ? "info" : "debug",
  format: format.json(),
  defaultMeta: { service: "example-service" },
  transports: [new transports.Console()],
});

export default logger;
