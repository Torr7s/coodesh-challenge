import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateArticleDto } from '@modules/articles/domain/dtos/create-article.dto';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';

import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

@Injectable()
export class CreateArticleService {
  constructor(private readonly _repository: ArticlesRepository) { }

  async perform({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
    launches,
    events
  }: CreateArticleDto): Promise<ArticleModel> {
    const articleData = await this._repository.findByTitle(title)

    if (articleData) throw new BadRequestException('Title already being used by another article.')

    const newArticleData = await this._repository
      .create({
        featured,
        title,
        url,
        imageUrl,
        newsSite,
        summary,
        publishedAt,
        launches,
        events
      })

    return newArticleData
  }
}