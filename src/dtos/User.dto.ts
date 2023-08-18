import { IsString, IsUrl, ValidationOptions } from "class-validator";

const msg: ValidationOptions = {
  message: "All fields are required!",
};

export class UserDto {
  @IsString(msg)
  username: string;

  @IsString(msg)
  @IsUrl()
  avatar: string;

  constructor(username: string, avatar: string) {
    this.username = username;
    this.avatar = avatar;
  }
}
