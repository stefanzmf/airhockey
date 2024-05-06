import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from 'apps/server/src/users/types';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'all users'
  }

  @Get('/:email')
  findById(@Param('email') email: string) {
    console.log(email)
    return 'user'
  }

  @Post('/create')
  create(@Body() user: Pick<User, 'email' | 'username'>) {
    console.log(user)
    return 'user created'
  }
}
