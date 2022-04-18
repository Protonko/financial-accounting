import {NestFactory} from '@nestjs/core'
import {ValidationPipe} from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import {AppModule} from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = {
    origin: 'http://localhost:3001',
    credentials: true,
  }

  app.enableCors(options)
  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())
  await app.listen(3000)
}

bootstrap()
