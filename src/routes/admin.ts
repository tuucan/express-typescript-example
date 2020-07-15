import express, { Request, Response } from "express";

function getAdminRoutes() {
  const router = express.Router();
  router.get("/do-admin-shit", shit);
  router.get("/do-some-other-shit", otherShit);
  return router;
}

async function shit(_req: Request, res: Response) {
  res.send("shiiiiit");
}

async function otherShit(req: Request, res: Response) {
  res.send("other shiiiiit");
}

export { getAdminRoutes };
