import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./entities/User.entity";
import { UserDto } from "./dtos/User.dto";
import { TweetDto } from "./dtos/Tweet.dto";
import { Tweet } from "./entities/Tweet.entity";
import { UsernameDto } from "./dtos/Username.dto";

@Injectable()
export class AppService {
  private Users: User[] = [];
  private Tweets: Tweet[] = [];

  getHello(): string {
    return "I'm okay!";
  }

  createUser(UserDto: UserDto): number {
    return this.Users.push(new User(UserDto.username, UserDto.avatar));
  }

  createTweet(TweetDto: TweetDto): boolean {
    const found = this.Users.find(
      (u: User) => u.getUsername() === TweetDto.username,
    );
    if (found) {
      this.Tweets.push(new Tweet(found, TweetDto.tweet));
      return true;
    }

    return false;
  }

  getTweets(page) {
    if (!isNaN(page) && Number(page) <= 0)
      throw new HttpException(
        "Informe uma página válida!",
        HttpStatus.BAD_REQUEST,
      );

    let arr: Tweet[];
    const itemsPerPage = 15;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (page) arr = this.Tweets.slice(startIndex, endIndex);
    else arr = this.Tweets.slice(-15);

    return arr.map((t) => ({
      username: t.getUsername(),
      avatar: t.getAvatar(),
      tweet: t.getTweet(),
    }));
  }

  getTweetsFromUser(username: UsernameDto) {
    return this.Tweets.filter((t) => t.getUsername() === username.username).map(
      (t) => ({
        username: t.getUsername(),
        avatar: t.getAvatar(),
        tweet: t.getTweet(),
      }),
    );
  }
}
