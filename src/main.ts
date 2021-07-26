import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as mongose from 'mongoose';

async function bootstrap() {
  mongose.connect('mongodb://localhost/nest-blog-api', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nestjs 博客API')
    .setDescription('第一个 nestjs 项目')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
