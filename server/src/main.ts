import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {ValidationPipe} from '@nestjs/common'

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
  await app.listen(3000)
}

bootstrap()
