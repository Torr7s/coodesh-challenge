import { BadRequestException, Injectable } from '@nestjs/common';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';
import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

@Injectable()
export class ListArticlesService {
  constructor(private readonly _repository: ArticlesRepository) { }

  async perform(limit: number = 10): Promise<ArticleModel[]> {
    if (!limit || limit && limit > 6) limit = 6

    const articlesData = await this._repository.list(limit)

    if (!articlesData.length) throw new BadRequestException('No articles have been found.')

    return articlesData
  }
}