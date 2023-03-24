import {
  Body, Controller, Get, Post, Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomRequest } from '../common/types/custom-request.type';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    return this.authService.loginUser(email, password);
  }

  @Get('/profile/me')
  async myProfile(@Req() req: CustomRequest) {
    return req.user;
  }
}
