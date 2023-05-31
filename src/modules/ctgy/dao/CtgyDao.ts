import { sequelize } from '../../BaseDao'
import convert from '../moduleTypes'
class CtgyDao {
  static ctgyDao: CtgyDao = new CtgyDao()
  async findSecThrdCtgys(firstCtgyId: number) {
    const sql = `select * from secondctgy sc inner join thirdctgy tc on sc.secondCtgyId=tc.secCtgyId where sc.firstCtgyId=${firstCtgyId}`
    const secThrCtgys: any[] = (await sequelize.query(sql))[0]
    return convert(secThrCtgys)
  }
  async findFirstCtgys() {
    const sql = 'select * from firstctgy'
    const firstCtgys: any[] = (await sequelize.query(sql))[0]
    return firstCtgys
  }
}
export default CtgyDao.ctgyDao