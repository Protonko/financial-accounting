import {forwardRef, Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import {config} from 'dotenv'
import {AuthService} from './auth.service'
import {UserModule} from '../user/user.module'
import {LocalStrategy} from './strategies/local.strategy'
import {JwtStrategy} from './strategies/jwt.strategy'

export const JWT_MODULE_OPTIONS = {
  secret: config().parsed.JWT_SECRET_KEY,
  signOptions: {expiresIn: '10h'},
}

@Module({
  imports: [
    PassportModule,
    JwtModule.register(JWT_MODULE_OPTIONS),
    forwardRef(() => UserModule),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
