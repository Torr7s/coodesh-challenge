import { BadRequestException, Injectable } from '@nestjs/common';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';
import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

@Injectable()
export class FindArticleService {
  constructor(private readonly _repository: ArticlesRepository) { }

  async perform(id: number): Promise<ArticleModel> { 
    const articleData = await this._repository.findById(id)

    if (!articleData) throw new BadRequestException('Article does not exists!')

    return articleData
  }
}