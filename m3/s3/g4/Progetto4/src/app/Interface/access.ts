import { User } from "./user";

export interface Access {
  accessToken: string;
  user: User;
}
