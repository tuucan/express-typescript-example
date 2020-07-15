import express from "express";
import { getAdminRoutes } from "./admin";

function getRoutes() {
  const router = express.Router();
  router.use("/admin", getAdminRoutes());
  //router.use('/other', getOtherRoutes())
  return router;
}

export { getRoutes };
