import path from 'path'
import fs from 'fs'
import Router from 'koa-router'
import Koa from 'koa'
import body from 'koa-body'
import json from 'koa-json'
import globalException from './globalExec'
import logger from './logUtil'
class AllRouterLoader {
  app!: Koa
  static allRouterLoader: AllRouterLoader = new AllRouterLoader()
  init(app: Koa) {
    this.app = app
    const rootRouter = this.loadAllRouterWrapper()
    this.app.use(globalException)
    this.app.use(rootRouter.routes())
    this.listen()
  }
  getFiles(dir: string) {
    return fs.readdirSync(dir)
  }
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), '/src/router')
    const allFiles = this.getFiles(dir)
    const allFullFilePaths: string[] = []
    for (let file of allFiles) {
      const fullFilePath = dir + '\\' + file
      allFullFilePaths.push(fullFilePath)
    }
    return allFullFilePaths
  }
  loadAllRouterWrapper() {
    const rootRouter = this.getRootRouter()
    const allFullFilePaths = this.getAbsoluteFilePaths()
    this.loadAllRouter(allFullFilePaths, rootRouter)
    return rootRouter
  }
  getRootRouter() {
    const rootRouter = new Router()
    rootRouter.prefix('/bookstore')
    this.app.use(json())
    this.app.use(body())
    return rootRouter
  }
  isRouter(data: any):data is Router {
    return data instanceof Router
  }
  loadAllRouter(allFullFilePaths: string[], rootRouter: Router) {
    for (let fullFilePath of allFullFilePaths) {
      const module = require(fullFilePath)
      if (this.isRouter(module)) {
        rootRouter.use(module.routes(), module.allowedMethods())
      }
    }
  }
  listen() {
    this.app.listen(3002)
    logger.info('http://localhost:3002')
  }
}
export default AllRouterLoader.allRouterLoader