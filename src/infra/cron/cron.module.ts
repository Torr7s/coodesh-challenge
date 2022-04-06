import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { LoggerModule } from '@shared/providers/logger/logger.module';

import { ArticlesModule } from '@modules/articles/articles.module';

import { CronProvider } from './cron.provider';

@Module({
  imports: [
    ArticlesModule,
    LoggerModule,
    HttpModule.register({
      baseURL: process.env.BASE_URL,
      proxy: {
        protocol: 'http',
        host: 'localhost',
        port: 3030
      }
    })
  ],
  providers: [CronProvider]
})

export class CronModule { }