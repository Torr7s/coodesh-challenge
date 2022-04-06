import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';

import { ArticleResponseDto } from '@modules/articles/domain/dtos/article-response.dto';

import { FindArticleService } from './find-article.service';

@ApiTags('Articles')
@Controller('/articles')
export class FindArticleController {
  constructor(private readonly _findArticleService: FindArticleService) { }

  @ApiOperation({ description: 'Search for an article by its id' })

  @ApiParam({ name: 'id', description: 'Id of an existing article to be searched for' })

  @ApiResponse({ status: 200, description: 'An article was successfully found', type: ArticleResponseDto })
  @ApiResponse({ status: 400, description: 'No article with the given id was found' })

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