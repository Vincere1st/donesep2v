const path = require('path')
export const PROJECT_DIR = path.join(process.env.PWD,'..')
export const TYPEORM = 'TYPEORM'
export const DEVELOPMENT = 'development'
export const TEST = 'test'
export const PRODUCTION = 'production'
export const REPOSITORIES = {
  user: 'user',
} as const
