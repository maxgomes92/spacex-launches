const isProduction = process.env.NODE_ENV === 'production'
const GITPAGES_PATH = '/spacex-launches'

const DEFAULT_PATH = {
  home: '/',
  launches: '/launches',
  rockets: '/rockets',
}

const PRODUCTION_PATH = Object.entries(DEFAULT_PATH).reduce((acc: Record<string, string>, [key, value]) => {
  acc[key] = GITPAGES_PATH + value
  return acc
}, {})

export const PATH = isProduction ? PRODUCTION_PATH : DEFAULT_PATH