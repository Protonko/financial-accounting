import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common'
import {AuthService} from './auth.service'
import {LocalAuthGuard} from './guards/local-auth.guard'
import {JwtAuthGuard} from './guards/jwt-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request) {
    return this.authService.login(request.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
