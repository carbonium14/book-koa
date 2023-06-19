import { model } from "../defmodel"
export type Userinfo = {
  userId: number,
  username: string,
  psw: string,
  address: string,
  valid: number,
  token: string
}
class UserDao {
  static userDao: UserDao = new UserDao()
  findOneUser(username: string, psw: string) {
    return model.findOne({
      raw: true,
      where: {
        username,
        psw
      }
    })
  }
}
export default UserDao.userDao