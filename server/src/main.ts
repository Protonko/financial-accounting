import {NestFactory} from '@nestjs/core'
import {ValidationPipe} from '@nestjs/common'
import * as cookieParser from 'cookie-parser';
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }

  app.enableCors(options)
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  await app.listen(3000)
}

bootstrap()
