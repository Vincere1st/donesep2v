import { Injectable, Inject } from '@nestjs/common'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/user.dto'
import { REPOSITORIES } from '../core/config/constants'
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UserService {

  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.create(user)
  }

  async findOneByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { username } })
  }

  async findOneByUuid(uuid: string): Promise<User> {
    return await this.userRepository.findOne({ where: { uuid } })
  }
}
