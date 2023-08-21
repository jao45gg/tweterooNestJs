import { User } from "./User.entity";

export class Tweet {
  private user: User;
  private tweet: string;
  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }
  getTweet() {
    return this.tweet;
  }
  getUsername() {
    return this.user.getUsername();
  }
  getAvatar() {
    return this.user.getUsername();
  }
}
