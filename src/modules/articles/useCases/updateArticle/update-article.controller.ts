import { Controller, Body, Param, Req, Res, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { ArticleResponseDto } from '@modules/articles/domain/dtos/article-response.dto';
import { UpdateArticleDto } from '@modules/articles/domain/dtos/update-article.dto';

import { UpdateArticleService } from './update-article.service';

@ApiTags('Articles')
@Controller('/articles')
export class UpdateArticleController {
  constructor(private readonly _updateArticleService: UpdateArticleService) { }
  
  @ApiOperation({ description: 'Update a desired article by its id' })

  @ApiParam({ name: 'id', description: 'Id of an existing article to be searched for' })
  
  @ApiBody({ type: UpdateArticleDto })

  @ApiResponse({ status: 200, description: 'The article has been successfully updated.', type: ArticleResponseDto })
  @ApiResponse({ status: 400, description: 'No article with the given id was found.'})
  
  @Put(':id')
  async handle(
    @Param('id') id: number,
    @Body() data: UpdateArticleDto,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    await this._updateArticleService.perform(id, data)

    return response.sendStatus(200)
  }
}