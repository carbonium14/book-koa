import 'reflect-metadata'
export function reqProcess(methodType: string) {
  return function (reqPath: string) {
    return function (targetClassPrototype: any, methodname: string, methodDecri: PropertyDescriptor) {
      Reflect.defineMetadata('path', reqPath, targetClassPrototype, methodname)
      Reflect.defineMetadata('methodType', methodType, targetClassPrototype, methodname)
    }
  }
}
const get = reqProcess('get')
const post = reqProcess('post')
const put = reqProcess('put')
const del = reqProcess('delete')
export { get, post, put, del }