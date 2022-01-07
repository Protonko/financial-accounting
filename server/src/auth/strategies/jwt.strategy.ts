import {ExtractJwt, Strategy} from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'
import {Injectable, UnauthorizedException} from '@nestjs/common'
import {config} from 'dotenv'
import {JwtPayload} from '../../model/JwtPayload'
import {UserService} from '../../user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config().parsed.JWT_SECRET_KEY,
    })
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.getById(payload.sub)

    if (!user) {
      throw new UnauthorizedException('Unauthorized!')
    }

    return {id: payload.sub, email: payload.email}
  }
}
