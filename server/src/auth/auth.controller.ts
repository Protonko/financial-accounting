import {Controller, Post, UseGuards, Request} from '@nestjs/common'
import {AuthService} from './auth.service'
import {LocalAuthGuard} from './guards/local-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() request: Express.Request) {
    return request.user && this.authService.login(request.user)
  }
}