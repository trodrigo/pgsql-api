import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './configs/winston.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const logger = WinstonModule.createLogger(winstonConfig)
  const app = await NestFactory.create(AppModule, { logger });

  const options = new DocumentBuilder()
    .setTitle("Auth Nest Postgree - API")
    .setDescription(
      "Authentication with Nest and Postgre"
    )          
    .setVersion("1.0")
    .addTag("Auth-Nest-Postgree")
    .addBearerAuth()
    .build();
  //const apppDocument = SwaggerModule.createDocument(app, options, {
  //  include: [NoteModule]
  //}); 
  const apppDocument = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("api", app, apppDocument);
  await app.listen(3000);
}

bootstrap();
