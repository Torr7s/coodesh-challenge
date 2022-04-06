import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { ArticlesModule } from '@modules/articles/articles.module';
import { LoggerModule } from '@shared/providers/logger/logger.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ArticlesModule,
    LoggerModule,
    
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      autoIndex: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
