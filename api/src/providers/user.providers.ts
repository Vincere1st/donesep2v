import { User } from '../entities/user.entity'
import { REPOSITORIES } from '../core/config/constants'

export const UserProviders = [
  {
    provide: REPOSITORIES.user,
    useValue: User,
  },
]
