import Koa from 'koa'
import allRouterLoader from './common/allCtrlRouterLoader'
const app = new Koa()
allRouterLoader.init(app)