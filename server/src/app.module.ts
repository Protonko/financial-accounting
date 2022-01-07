import {Module} from '@nestjs/common'
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm'
import {config} from 'dotenv'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {SpendingModule} from './spending/spending.module'
import {Spending} from './spending/entities/spending'
import {UserModule} from './user/user.module'
import {User} from './user/entities/user.entity'
import {AuthModule} from './auth/auth.module'

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: config().parsed.DATABASE_USER,
  password: config().parsed.DATABASE_PASSWORD,
  database: config().parsed.DATABASE_NAME,
  entities: [Spending, User],
  synchronize: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    SpendingModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
