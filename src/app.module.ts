import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { CronModule } from '@infra/cron/cron.module';

import { ArticlesModule } from '@modules/articles/articles.module';
import { LoggerModule } from '@shared/providers/logger/logger.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoIndex: true
    }),
    ArticlesModule,
    LoggerModule,
    CronModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
