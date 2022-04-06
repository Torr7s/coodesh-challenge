import { CreateArticleDto } from '../dtos/create-article.dto';
import { UpdateArticleDto } from '../dtos/update-article.dto';

import { ArticleModel } from '@modules/articles/infra/mongoose/models/article.model';

export interface IArticlesRepository {
  create(data: CreateArticleDto): Promise<ArticleModel>;
  findById(id: number): Promise<ArticleModel>;
  findByTitle(title: string): Promise<ArticleModel>;
  list(limit?: number): Promise<ArticleModel[]>;
  delete(id: number): Promise<void>;
  update(id: number, data: UpdateArticleDto): Promise<void>;
}