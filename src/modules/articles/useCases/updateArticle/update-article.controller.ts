import { Controller, Body, Param, Req, Res, Put } from '@nestjs/common';
import { Request, Response } from 'express';

import { UpdateArticleDto } from '@modules/articles/domain/dtos/update-article.dto';

import { UpdateArticleService } from './update-article.service';

@Controller('/articles')
export class UpdateArticleController {
  constructor(private readonly _updateArticleService: UpdateArticleService) { }

  @Put(':_id')
  async handle(
    @Param('_id') _id: number,
    @Body() data: UpdateArticleDto,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    await this._updateArticleService.perform(_id, data)

    return response.sendStatus(200)
  }
}