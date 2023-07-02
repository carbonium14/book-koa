import body from 'koa-body'
import Koa from 'koa'
import json from 'koa-json'
import globalException from './globalExec'
import Router from 'koa-router'
import path from 'path'
import fs from 'fs'
import logger from './logUtil'
import koajwt from 'koa-jwt'
class AllCtrlRouterLoader {
  app!: Koa
  static allCtrlRouterLoader: AllCtrlRouterLoader = new AllCtrlRouterLoader()
  init(app: Koa) {
    this.app = app
    this.loadMiddleware()
    this.storeRootRouterToCtx()
    this.loadAllCtrlRouterWrapper()
    this.listen()
  }
  loadMiddleware() {
    this.app.use(json())
    this.app.use(body())
    this.app.use(globalException)
    this.app.use(koajwt({
      secret: '114514'
    }).unless({
      path: [/^\/dang\/usermodule\/login/]
    }))
  }
  storeRootRouterToCtx() {
    const rootRouter = new Router()
    rootRouter.prefix('/dang')
    this.app.context.rootRouter = rootRouter
    this.app.use(rootRouter.routes())
  }
  getFiles(dir: string) {
    return fs.readdirSync(dir)
  }
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), '/src/controller')
    const allFiles = this.getFiles(dir)
    const allFullFilePaths: string[] = []
    for (let file of allFiles) {
      if (this.isCtrlFile(file)) {
        const fullFilePath = dir + '\\' + file
        allFullFilePaths.push(fullFilePath)
      }
    }
    return allFullFilePaths
  }
  isCtrlFile(file: string) {
    const fileName: string = file.substring(file.lastIndexOf('\\') + 1, file.lastIndexOf('.'))
    const extensionName: string = file.substring(file.lastIndexOf('.'), file.length)
    return fileName.indexOf('Controller') !== -1 && extensionName === '.ts'
  }
  loadAllCtrlRouterWrapper() {
    const allFullFilePaths = this.getAbsoluteFilePaths()
    this.loadAllRouter(allFullFilePaths)
  }
  loadAllRouter(allFullFilePaths: string[]) {
    for (let fullFilePath of allFullFilePaths) {
      require(fullFilePath)
    }
  }
  listen() {
    this.app.listen(3002)
    logger.info('http://localhost:3002')
  }
}
export default AllCtrlRouterLoader.allCtrlRouterLoader