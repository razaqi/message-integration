import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')
  app.enableCors({
    origin: '*'
  })

  await app.listen(port, () => {
    console.log('[WEB]', config.get<string>('BASE_URL'))
  });
}
bootstrap();
