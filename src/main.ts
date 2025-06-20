import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', true); // Or a specific number of proxies e.g., 1
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
