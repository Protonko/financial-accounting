import {Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {config} from 'dotenv'
import {AuthService} from './auth.service'
import {UserModule} from '../user/user.module'
import {LocalStrategy} from './strategies/local.strategy'
import {AuthController} from './auth.controller'
import {JwtStrategy} from './strategies/jwt.strategy'

export const JWT_MODULE_OPTIONS = {
  secret: config().parsed.JWT_SECRET_KEY,
  signOptions: {expiresIn: '60s'}
}

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register(JWT_MODULE_OPTIONS)
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
