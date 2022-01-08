import {Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {compare} from 'bcrypt'
import {UserService} from '../user/user.service'
import {User} from '../user/entities/user.entity'
import {JwtPayload} from '../model/JwtPayload'
import {LoginUserData} from '../model/LoginUserData'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.getByEmail(email)
    const isPasswordMatch = user && await compare(password, user.password)

    if (isPasswordMatch) {
      const {password, ...result} = user
      return result
    }

    return null
  }

  login(user: User): LoginUserData {
    const payload: JwtPayload = {email: user.email, sub: user.id}
    const {password, ...userData} = user

    return {
      ...userData,
      access_token: this.jwtService.sign(payload),
    }
  }
}
