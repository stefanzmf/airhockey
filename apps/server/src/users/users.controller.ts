import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {randomUUID} from 'crypto'

import { UserReqBody } from './types';
import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private usersGateway: UsersGateway) {}

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
  create(@Body() payload: UserReqBody) {
    const id = randomUUID();
    const createdAt = new Date()


    const user = this.usersService.create({
      id,
      createdAt,
      ...payload,
    })

    this.usersGateway.emitActiveUsersCount()

    return user;
  }
}
