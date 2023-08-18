import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserDto } from "./dtos/User.dto";
import { Http2ServerResponse } from "http2";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/sign-up")
  signUp(@Body() body: UserDto, @Res() res: Response) {
    this.appService.createUser(body);
    res.sendStatus(HttpStatus.OK);
  }
}
