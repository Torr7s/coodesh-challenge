import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { ArticleResponseDto } from '@modules/articles/domain/dtos/article-response.dto';
import { CreateArticleDto } from '@modules/articles/domain/dtos/create-article.dto';

import { CreateArticleService } from './create-articles.service';

@ApiTags('Articles')
@Controller('/articles')
export class CreateArticleController {
  constructor(private readonly _createArticleService: CreateArticleService) { }

  @ApiBody({ type: CreateArticleDto })

  @ApiResponse({ status: 200, description: 'The article has been successfully created.', type: ArticleResponseDto })
  @ApiResponse({ status: 400, description: 'An article was found with the same title provided.'})

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