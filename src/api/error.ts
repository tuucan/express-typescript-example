import status from "http-status";

type ErrorCode = string | number;

export class ServerError extends Error {
  __proto__: ServerError;
  errorCode?: ErrorCode;
  statusCode: number;

  constructor(
    message: string,
    statusCode: number = status.INTERNAL_SERVER_ERROR,
    errorCode?: ErrorCode
  ) {
    const trueProto = new.target.prototype;
    super(message);
    this.name = "Server Error";
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.__proto__ = trueProto;
  }

  static BadRequest(message: string, errorCode?: ErrorCode) {
    return new this(message, status.BAD_REQUEST, errorCode);
  }

  static NotFound(message: string, errorCode?: ErrorCode) {
    return new this(message, status.NOT_FOUND, errorCode);
  }
}
