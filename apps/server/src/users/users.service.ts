import { Injectable } from '@nestjs/common';

import {User} from './types'

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  getAll() {
    return this.users;
  }

  getAllCount() {
    return this.users.length;
  }

  findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    if (!user) return false;

    return user;
  }

  create(user: User) {
    if (this.findByEmail(user.email)) {
      return false;
    }

    this.users.push(user);
    return user;
  }
}
