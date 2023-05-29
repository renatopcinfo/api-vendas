import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';
import { HttpCode } from '@shared/helpers/httpCode';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService();

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(HttpCode.NO_CONTENT).json();
  }
}
