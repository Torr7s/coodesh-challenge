import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { AppService } from './app.service';

@ApiTags('Articles')
@Controller('/')
export class AppController {
  constructor(private readonly _appService: AppService) { }

  @ApiResponse({ status: 200, description: 'Back-end Challenge 2021 🏅 - Space Flight News' })

  @Get()
  async handle(@Req() request: Request, @Res() response: Response): Promise<Response> {
    return response.status(200).json(this._appService.perform())
  }
}
