/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from './app/filters/http-exception-filter';
import { ApiGuard } from './app/guards/api-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // it will read only assumed properties, and skip every which is not in type.
      forbidNonWhitelisted: true, // throw error and show what data is not correct. Developer mode, In production can be helpful  for hacker
      transform: true, // It make types fit. Check if data are instance of TS type - helpful while we need typ checking in app.
    })
  );
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new ApiGuard());
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
