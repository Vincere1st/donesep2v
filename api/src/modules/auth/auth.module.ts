import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from '../../services/auth.service'
import { AuthController } from '../../controller/auth.controller'
import { UserModule } from '../user.module'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'


@Module({
	imports: [
		PassportModule,
		UserModule,
		JwtModule.register({
			secret: process.env.JWTKEY,
			signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
		}),
	],
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy
	],
	controllers: [AuthController],
})
export class AuthModule {}
