import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { UserDto } from "./dtos/User.dto";
import { Response } from "express";
import { TweetDto } from "./dtos/Tweet.dto";
import { UsernameDto } from "./dtos/Username.dto";

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

  @Post("/tweets")
  tweet(@Body() body: TweetDto, @Res() res: Response) {
    const post = this.appService.createTweet(body);
    if (post) return res.sendStatus(HttpStatus.CREATED);

    res.sendStatus(HttpStatus.UNAUTHORIZED);
  }

  @Get("/tweets")
  getTweets(@Query("page") page) {
    return this.appService.getTweets(page);
  }

  @Get("/tweets/:username")
  getTweetsFromUser(@Param() username: UsernameDto) {
    return this.appService.getTweetsFromUser(username);
  }
}
