import { BadRequestException, Injectable } from '@nestjs/common';

import { UpdateArticleDto } from '@modules/articles/domain/dtos/update-article.dto';

import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

@Injectable()
export class UpdateArticleService {
  constructor(private readonly _repository: ArticlesRepository) { }

  async perform(id: number, data: UpdateArticleDto): Promise<void> {
    const articleData = await this._repository.findById(id)
    
    if (!articleData) throw new BadRequestException('Article does not exists!')

    return this._repository.update(id, data)
  }
}