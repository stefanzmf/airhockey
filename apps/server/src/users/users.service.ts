import { Injectable } from '@nestjs/common';

import {User} from './types'

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  findAll() {
  }

  findByEmail(email: string) {
    this.users.find((user) => user.email === email)
  }

  create(user: User) {
    console.log(`User created`, JSON.stringify(user))
  }
}
