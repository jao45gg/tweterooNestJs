import { Injectable } from "@nestjs/common";
import { User } from "./entities/User.entity";
import { UserDto } from "./dtos/User.dto";

@Injectable()
export class AppService {
  private Users: User[] = [];

  getHello(): string {
    return "I'm okay!";
  }

  createUser(UserDto: UserDto): number {
    return this.Users.push(new User(UserDto.username, UserDto.avatar));
  }
}
