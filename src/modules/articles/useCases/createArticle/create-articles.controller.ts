import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateArticleDto } from '@modules/articles/domain/dtos/create-article.dto';

import { CreateArticleService } from './create-articles.service';

@Controller('/articles')
export class CreateArticleController {
  constructor(private readonly _createArticleService: CreateArticleService) { }

  @Post()
  async handle(
    @Body() data: CreateArticleDto,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    const article = await this._createArticleService.perform(data)

    return response.json(article)
  }
}