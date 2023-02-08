import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {SpendingModule} from './spending/spending.module'
import {UserModule} from './user/user.module'
import {AuthModule} from './auth/auth.module'
import {CategoryModule} from './category/category.module'
import {Connection} from 'typeorm'
import {ReportModule} from './report/report.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    SpendingModule,
    UserModule,
    AuthModule,
    CategoryModule,
    ReportModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    connection.runMigrations()
  }
}
