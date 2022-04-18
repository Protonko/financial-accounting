import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {SpendingModule} from './spending/spending.module'
import {UserModule} from './user/user.module'
import {AuthModule} from './auth/auth.module'
import {CategoryModule} from './category/category.module'
import {Connection} from 'typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SpendingModule,
    UserModule,
    AuthModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    connection.runMigrations()
  }
}
