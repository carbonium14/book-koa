import ctgyDao from '../dao/CtgyDao'
import redisUtil from '../../../common/redisUtil'
class CtgyService {
  static ctgyService: CtgyService = new CtgyService()
  async findFirstCtgys() {
    const firstCtgysRedis = await redisUtil.hget('firstCtgysHash', 'firstCtgys')
    if (!firstCtgysRedis) {
      const firstCtgys = await ctgyDao.findFirstCtgys()
      redisUtil.hset('firstCtgysHash', 'firstCtgys', firstCtgys)
      return firstCtgys
    } else {
      return firstCtgysRedis
    }
  }
  async findSecThrdCtgys(firstCtgyId: number) {
    return await ctgyDao.findSecThrdCtgys(firstCtgyId)
  }
}
export default CtgyService.ctgyService