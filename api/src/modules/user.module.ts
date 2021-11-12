import { Module } from '@nestjs/common'
import { UserController } from '../controller/user.controller'
import { UserService } from '../services/user.service'
import { UserProviders } from '../providers/user.providers'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
  exports: [UserService]
})
export class UserModule {}
