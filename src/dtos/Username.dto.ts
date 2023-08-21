import { IsString } from "class-validator";

export class UsernameDto {
  @IsString()
  username: string;

  constructor(username: string) {
    this.username = username;
  }
}
