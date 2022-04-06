import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';

import { ArticleResponseDto } from '@modules/articles/domain/dtos/article-response.dto';

import { ListArticlesService } from './list-articles.service';

@ApiTags('Articles')
@Controller('/articles')
export class ListArticlesController {
  constructor(private readonly _listArticlesService: ListArticlesService) { }

  @ApiQuery({ name: 'limit', description: 'Set a limit of up to 6 articles to be found.', required: false })

  @ApiResponse({ status: 200, description: 'Up to 6 articles were successfully found.', type: [ArticleResponseDto] })
  @ApiResponse({ status: 400, description: 'No articles were found.' })

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