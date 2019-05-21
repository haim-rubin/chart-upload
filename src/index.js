import config from '../config.json'
import server from './server'
import init from './init'
init(config)
server(config)