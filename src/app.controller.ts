import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly _appService: AppService) { }

  @Get()
  async handle(@Req() request: Request, @Res() response: Response): Promise<Response> {
    return response.status(200).json(this._appService.perform())
  }
}
