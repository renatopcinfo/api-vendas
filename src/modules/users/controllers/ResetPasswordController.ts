import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';
import { HttpCode } from '@shared/helpers/httpCode';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      password,
      token,
    });

    return response.status(HttpCode.NO_CONTENT).json();
  }
}
