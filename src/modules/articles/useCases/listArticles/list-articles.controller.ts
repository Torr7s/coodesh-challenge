import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';

import { ListArticlesService } from './list-articles.service';

@Controller('/articles')
export class ListArticlesController {
  constructor(private readonly _listArticlesService: ListArticlesService) { }

  @Get()
  async handle(
    @Query('limit') limit: number,
    @Req() request: Request, 
    @Res() response: Response
  ): Promise<Response> {
    const articles: ArticleModel[] = await this._listArticlesService.perform(limit)

    return response.json(articles)
  }
}