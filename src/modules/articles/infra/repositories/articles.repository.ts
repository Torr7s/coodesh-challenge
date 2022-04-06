import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateArticleDto } from '@modules/articles/domain/dtos/create-article.dto';
import { UpdateArticleDto } from '@modules/articles/domain/dtos/update-article.dto';
import { IArticlesRepository } from '@modules/articles/domain/repositories/articles.interface';

import { ArticleModel, ArticleDocument } from '../mongoose/models/article.model';

@Injectable()
export class ArticlesRepository implements IArticlesRepository {
  constructor(@InjectModel(ArticleModel.name) private _articleModel: Model<ArticleDocument>) { }

  async create(data: CreateArticleDto): Promise<ArticleModel> {
    const newArticle = new this._articleModel(data, { strict: false })

    await newArticle.save()

    return newArticle
  }

  async findById(id: number): Promise<ArticleModel> {
    const articleData = await this._articleModel.findOne({ id })

    return articleData
  }

  async findByTitle(title: string): Promise<ArticleModel> {
    const articleData = await this._articleModel.findOne({ title })

    return articleData
  }

  async list(limit?: number): Promise<ArticleModel[]> {
    const articlesData = await this._articleModel
      .find()
      .sort([
        /* argument, order */
        ['created_at', '-1']
      ])
      .limit(limit)
      .exec()

    return articlesData
  }

  async delete(id: number): Promise<void> {
    await this._articleModel.deleteOne({ id })
  }

  async update(id: number, data: UpdateArticleDto): Promise<void> {
    const { featured, title, url, imageUrl, newsSite, summary, publishedAt } = data

     await this._articleModel.updateOne({ id },
      {
        $set: {
          'featured': featured,
          'title': title,
          'url': url,
          'imageUrl': imageUrl,
          'newsSite': newsSite,
          'summary': summary,
          'publishedAt': publishedAt
        }
      }
    )
  }
}