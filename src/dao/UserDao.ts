import { isNotEmpty } from "../common/stringUtil"
import BaseDao from "./BaseDao"
import Userinfo from "../model/Userinfo"
class UserDao {
  static userDao: UserDao = new UserDao()
  findUser(username: string, psw: string) {
    let sql = 'select * from userinfo where 1=1'
    if (isNotEmpty(username)) {
      sql += ` and username='${username}'`
    }
    if (isNotEmpty(psw)) {
      sql += ` and psw='${psw}'`
    }
    return BaseDao.query<Userinfo[]>(sql)
  }
}
export default UserDao.userDao