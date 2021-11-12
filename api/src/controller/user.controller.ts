import { Controller, Get } from '@nestjs/common'
import { UserService } from '../services/user.service'
import { CreateUserDto } from '../dto/user.dto'
import { User } from '../entities/user.entity'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
