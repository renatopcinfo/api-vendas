import { HttpCode } from '@shared/helpers/httpCode';

class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = HttpCode.BAD_REQUEST) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
