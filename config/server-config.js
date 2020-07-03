const config = {
  env: '',
  url: '',
  proxy: false
}

config.env = process.env.NODE_ENV

switch (config.env) {
  case 'production':
    config.url = ''
    config.proxy = false
    break
  default:
    config.url = ''
    config.proxy = false
}

export default config
