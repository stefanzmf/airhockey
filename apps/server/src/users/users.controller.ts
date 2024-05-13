import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {randomUUID} from 'crypto'

import { User, UserReqBody } from './types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Get()
  getAll() {
    return this.usersService.getAll()
  }

  @Get('/count')
  getAllCount() {
    return this.usersService.getAllCount()
  }

  @Get('/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Post('/create')
  create(@Body() user: UserReqBody) {
    const id = randomUUID();
    const createdAt = new Date()

    return this.usersService.create({
      id,
      createdAt,
      ...user,
    })
  }
}
