import express from "express";
import "express-async-errors";
import { getRoutes } from "./routes";
import { errorMiddleware } from "./middlewares";
import logger from "./utils/logger";

const app = express();
const port = process.env.PORT || "8000";

app.use("/example-service", getRoutes());
app.use(errorMiddleware);

const server = app.listen(port, err => {
  if (err) logger.error(err);
  else logger.info(`Example Service is running on port ${port}`);
});

async function exitHandler(options: any = {}) {
  try {
    server.close();
    logger.info("Server successfully closed");
  } catch (err) {
    logger.warn("Something went wrong closing the server", err.stack);
  }
  if (options.exit) process.exit();
}

// process.on('exit', exitHandler)
// catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));
// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
//process.on('uncaughtException', exitHandler.bind(null, {exit: true}))
