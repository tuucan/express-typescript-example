import { Request, Response, NextFunction } from "express";
import status from "http-status";
import { ServerError } from "../api/error";

export function errorMiddleware(
  error: ServerError,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    next(error);
  } else {
    res.status(error.statusCode || status.INTERNAL_SERVER_ERROR);
    res.json({
      code: error.errorCode,
      message: error.message,
      ...(process.env.NODE_ENV === "production" ? null : { stack: error.stack }),
    });
  }
}
