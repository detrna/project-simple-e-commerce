export class AppError {
  constructor(
    public statusCode: number,
    public message: string,
  ) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export class UnauthorizedError extends AppError {
  constructor(public message: string) {
    super(403, message);
  }
}

export class BadRequestError extends AppError {
  constructor(public message: string) {
    super(400, message);
  }
}
