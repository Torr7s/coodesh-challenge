import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticleModel, ArticleSchema } from './infra/mongoose/models/article.model';
import { ArticlesRepository } from './infra/repositories/articles.repository';

import { CreateArticleController } from './useCases/createArticle/create-articles.controller';
import { DeleteArticleController } from './useCases/deleteArticle/delete-article.controller';
import { FindArticleController } from './useCases/findArticle/find-article.controller';
import { ListArticlesController } from './useCases/listArticles/list-articles.controller';
import { UpdateArticleController } from './useCases/updateArticle/update-article.controller';

import { CreateArticleService } from './useCases/createArticle/create-articles.service';
import { DeleteArticleService } from './useCases/deleteArticle/delete-article.service';
import { FindArticleService } from './useCases/findArticle/find-article.service';
import { ListArticlesService } from './useCases/listArticles/list-articles.service';
import { UpdateArticleService } from './useCases/updateArticle/update-article.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: ArticleModel.name,
        schema: ArticleSchema
      }
    ])
  ],
  controllers: [
    CreateArticleController,
    DeleteArticleController,
    FindArticleController,
    ListArticlesController,
    UpdateArticleController
  ],
  providers: [
    ArticlesRepository,

    CreateArticleService,
    DeleteArticleService,
    FindArticleService,
    ListArticlesService,
    UpdateArticleService
  ]
})

export class ArticlesModule { }