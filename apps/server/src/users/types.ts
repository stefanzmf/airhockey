export type User = {
  id: string
  username: string;
  email: string;
  createdAt: Date;
}

export type UserReqBody = Pick<User, 'username' | 'email'>
