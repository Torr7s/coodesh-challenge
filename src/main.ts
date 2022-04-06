import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Swagger Documentation - Coodesh Challenge')
    .setDescription(
      'This documentation is intended to show all the functioning of this application, which was developed for a Coodesh challenge.'
    )
    .setVersion('3.4.0')
    .addTag('Articles')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  await app.listen(3030)
}

bootstrap()
