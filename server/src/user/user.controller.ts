import {Request, Response} from 'express'
import {Controller, Post, Body, Get, Req, UseGuards, Res} from '@nestjs/common'
import {UserService} from './user.service'
import {CreateUserDto} from './dto/create-user.dto'
import {AuthService} from '../auth/auth.service'
import {LocalAuthGuard} from '../auth/guards/local-auth.guard'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(
    @Req() request: Express.Request,
    @Res({passthrough: true}) response: Response
  ) {
    return request.user && this.authService.login(request.user, response)
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get('info')
  getInfo(@Req() request: Request) {
    const cookie = request.cookies['access_token']
    return this.authService.getInfo(cookie)
  }
}
