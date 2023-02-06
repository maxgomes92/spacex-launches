export const rocketImgUrl = process.env.PUBLIC_URL + "/launch.jpg"

export const imageByRocketName:Record<string, string> = {
  'Falcon 1': process.env.PUBLIC_URL + '/falcon1.jpg',
  'Falcon 9': process.env.PUBLIC_URL + '/falcon9.jpg',
  'Falcon Heavy': process.env.PUBLIC_URL + '/falconheavy.jpg',
  'Starship': process.env.PUBLIC_URL + '/starship.jpg',
}

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