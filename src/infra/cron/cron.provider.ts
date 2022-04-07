import { firstValueFrom } from 'rxjs';

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cron, CronExpression } from '@nestjs/schedule';

import { CreateArticleDto } from '@modules/articles/domain/dtos/create-article.dto';

import { ArticlesRepository } from '@modules/articles/infra/repositories/articles.repository';

import { LoggerProvider } from '@shared/providers/logger/logger.provider';

interface IRequest {
  data: CreateArticleDto[];
}

@Injectable()
export class CronProvider {
  private _baseUrl: string

  constructor(
    private readonly _httpService: HttpService,
    private readonly _repository: ArticlesRepository,
    private readonly _logger: LoggerProvider
  ) {
    this._baseUrl = process.env.BASE_URL
  }

  @Cron(CronExpression.EVERY_DAY_AT_9AM, { // Same as 0 09 * * * 
    name: 'article_synchronization',
    timeZone: 'America/Sao_Paulo'
  })
  async syncArticles(): Promise<void> {
    this._logger.warn('Starting articles synchronization...')

    const { data }: IRequest = await firstValueFrom(this._httpService.get(`${this._baseUrl}/articles`))

    data.forEach(async (article) => {
      const { title } = article

      const articleData = await this._repository.findByTitle(title)

      try {
        if (!articleData) {
          await this._repository.create(article)
        }
      } catch (error) {
        return this._logger.error(`Failed during articles synchronization: ${error}`)
      }
    })

    this._logger.warn('Articles synchronization performed successfully.')
  }
}