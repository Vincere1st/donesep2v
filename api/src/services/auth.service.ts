import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { UserService } from './user.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {
	}

	async validateUser(username: string, pass: string) {
		const user = await this.userService.findOneByUsername(username)
		if (!user) {
			return null
		}

		// find if user password match
		const match = await AuthService.comparePassword(pass, user.password)
		if (!match) {
			return null
		}

		const {password, ...result} = user['dataValues']
		return result
	}

	public async login(user) {
		const token = await this.generateToken(user)
		return {user, token}
	}

	public async create(user) {
		const pass = await AuthService.hashPassword(user.password)

		const newUser = await this.userService.create({...user, password: pass})

		const {password, ...result} = newUser['dataValues']

		const token = await this.generateToken(result)

		return {user: result, token}
	}

	private async generateToken(user) {
		return await this.jwtService.signAsync(user)
	}

	private static async hashPassword(password) {
		return await bcrypt.hash(password, 10)
	}

	private static async comparePassword(enteredPassword, dbPassword) {
		return await bcrypt.compare(enteredPassword, dbPassword)
	}
}
