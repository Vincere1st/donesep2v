import {TYPEORM} from '../config/constants'
import {config} from './ormconfig'
import {Connection, createConnection} from 'typeorm'

export const databaseProviders = [
  {
    provide: TYPEORM,
    useFactory: async ():Promise<Connection> => {
      return createConnection(config)
    }
  }
]
