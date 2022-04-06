import { Controller, Delete, HttpCode, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Request, Response } from 'express';

import { DeleteArticleService } from './delete-article.service';

@ApiTags('Articles')
@Controller('/articles')
export class DeleteArticleController {
  constructor(private readonly _deleteArticleService: DeleteArticleService) { }

  @ApiParam({ name: 'id', description: 'Id of an existing article to be searched for' })

  @ApiResponse({ status: 200, description: 'The article has been successfully deleted.' })
  @ApiResponse({ status: 400, description: 'No article with the given id was found.'})

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('id') id: number,
    @Req() request: Request,
    @Res() response: Response
  ): Promise<Response> {
    await this._deleteArticleService.perform(id)

    return response.sendStatus(200)
  }
}