import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors(configService.get('cors'));
  app.setGlobalPrefix('api');
  
  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
