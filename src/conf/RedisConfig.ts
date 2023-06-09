import Redis from 'koa-redis'
interface DbConConf {
  host: string,
  port: number
}
interface EnvConf {
  dev: DbConConf,
  prod: DbConConf
}
export interface RedisClient {
  set(key: string, value: string): any,
  get(key: string): any,
  hset(obj: string, key: string, value: any): any,
  hmset(obj: string, ...keyvalue: any[]): any,
  hget(obj: string, key: string): any,
  hgetall(obj: string): any,
  hmget(obj: string, ...keys: any[]): any,
  lpush(obj: string, ...vals: any[]): any,
  lrange(obj: string, ...indexs: any[]): any
}
class RedisConfig {
  static conf: RedisConfig = new RedisConfig()
  envConf!: EnvConf
  env!: keyof EnvConf
  constructor() {
    const curEnv = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
    this.env = curEnv
    this.initConf()
  }
  initConf() {
    this.envConf = {
      dev: {
        host: '127.0.0.1',
        port: 6379
      },
      prod: {
        host: '127.0.0.1',
        port: 6379
      }
    }
  }
  getConf() {
    return this.envConf[this.env]
  }
  redisServerCon() {
    return Redis(this.getConf()).client
  }
}
export default RedisConfig.conf