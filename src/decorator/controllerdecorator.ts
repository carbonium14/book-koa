import allCtrlRouterLoader from '../common/allCtrlRouterLoader'
type MethodType = 'get' | 'post' | 'put' | 'delete'
export function Controller(modulePath: string = '/') {
  function getFullPath(reqPath: string) {
    if (modulePath) {
      if (modulePath.length > 1) {
        if (!modulePath.startsWith('/')) {
          modulePath = '/' + modulePath
        }
      } else if (modulePath === '/') {
        modulePath = ''
      }
    }
    return `${modulePath}${reqPath}`
  }
  return function (targetClass: { new (...args: any): any }) {
    Object.keys(targetClass.prototype).forEach((methodName) => {
      const routerHandlerFn = targetClass.prototype[methodName]
      const reqPath = Reflect.getMetadata('path', targetClass.prototype, methodName)
      const fullReqPath = getFullPath(reqPath)
      const reqMethodType: MethodType = Reflect.getMetadata('methodType', targetClass.prototype, methodName)
      const rootRouter = allCtrlRouterLoader.app.context.rootRouter
      if (fullReqPath && reqMethodType) {
        rootRouter[reqMethodType](fullReqPath, routerHandlerFn)
      }
    })
  }
}