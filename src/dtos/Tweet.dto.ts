import { IsString, ValidationOptions } from "class-validator";

const msg: ValidationOptions = {
  message: "All fields are required!",
};

export class TweetDto {
  @IsString(msg)
  username: string;

  @IsString(msg)
  tweet: string;

  constructor(username: string, tweet: string) {
    this.username = username;
    this.tweet = tweet;
  }
}
