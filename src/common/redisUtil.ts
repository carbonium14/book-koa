import redisConfig, { RedisClient } from '../conf/RedisConfig'

class RedisUtil implements RedisClient {
  static redisUtil: RedisUtil = new RedisUtil()
  redisClient: RedisClient = redisConfig.redisServerCon()
  async set(key: string, value: string) {

  }
  async get(key: string) {

  }
  async hset(obj: string, key: string, value: any) {
    await this.redisClient.hset(obj, key, JSON.stringify(value))
  }
  async hmset(obj: string, ...keyvalue: any[]) {

  }
  async hget(obj: string, key: string) {
    const value = await this.redisClient.hget(obj, key)
    return value ? JSON.parse(value) : undefined
  }
  async hgetall(obj: string) {

  }
  async hmget(obj: string, ...keys: any[]) {

  }
  async lpush(obj: string, ...vals: any[]) {

  }
  async lrange(obj: string, ...indexs: any[]) {

  }
}
export default RedisUtil.redisUtil