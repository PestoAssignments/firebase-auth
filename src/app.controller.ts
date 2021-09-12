import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import * as firebase from "firebase-admin";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('login')
  @Render('login')
  login(@Req() request: Request) {
    return this.authService.login(request);
  }

  @Get('signup')
  @Render('signup')
  signup() {
    return;
  }
}
