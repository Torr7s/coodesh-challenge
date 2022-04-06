import { BadRequestException, Injectable } from '@nestjs/common';

import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

@Injectable()
export class DeleteArticleService {
  constructor(private readonly _repository: ArticlesRepository) { }

  async perform(id: number): Promise<void> {
    const articleData = await this._repository.findById(id)

    if (!articleData) throw new BadRequestException('Article does not exists!')

    return this._repository.delete(id)
  }
}