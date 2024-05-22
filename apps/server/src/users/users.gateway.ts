import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'

import { UsersService } from './users.service';

const ACTIVE_USERS_COUNT_EVENT = 'activeUsersCount';

@WebSocketGateway({
  path: '/users',
  cors: {
    origin: '*',
  }
})
export class UsersGateway implements OnGatewayConnection {
  constructor(private usersService: UsersService) {}

  @WebSocketServer()
  private server: Server;

  handleConnection(): void {
    this.server.emit(ACTIVE_USERS_COUNT_EVENT, this.usersService.getAllCount())
  }

  emitActiveUsersCount() {
    this.server.emit(ACTIVE_USERS_COUNT_EVENT, this.usersService.getAllCount())
  }

}
