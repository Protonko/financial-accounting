import type {Response} from 'express'
import type {JwtPayload} from '../model/JwtPayload'
import type {LoginUserData} from '../model/LoginUserData'
import {Injectable, UnauthorizedException} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {compare} from 'bcrypt'
import {UserService} from '../user/user.service'
import {User} from '../user/entities/user.entity'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.getByEmail(email)
    const isPasswordMatch = user && (await compare(password, user.password))

    if (isPasswordMatch) {
      const {password, ...result} = user
      return result
    }

    return null
  }

  login(user: User, response: Response): LoginUserData {
    const payload = {email: user.email, sub: user.id}
    const {password, ...userData} = user
    const token = this.jwtService.sign(payload)

    response.cookie('access_token', token, {httpOnly: true})

    return userData
  }

  async getInfo(token: string) {
    const data = this.jwtService.verify<JwtPayload>(token)

    if (!data) {
      throw new UnauthorizedException()
    }

    const user = await this.usersService.getById(data.sub)
    const {password, ...result} = user

    return result
  }
}
