import { Controller, Delete, HttpCode, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { DeleteArticleService } from './delete-article.service';

@Controller('/articles')
export class DeleteArticleController {
  constructor(private readonly _deleteArticleService: DeleteArticleService) { }

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