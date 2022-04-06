import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { FindArticleService } from './find-article.service';

@Controller('/articles')
export class FindArticleController {
  constructor(private readonly _findArticleService: FindArticleService) { }

  @Get(':id')
  async handle(
    @Param('id') id: number,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    const article = await this._findArticleService.perform(id)

    return response.json(article)
  }
}