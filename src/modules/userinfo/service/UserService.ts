import userDao, { Userinfo } from '../dao/UserDao'
import jwt from 'jsonwebtoken'
class UserService {
  static userService: UserService = new UserService()
  async findOneUser(username: string, psw: string) {
    const userinfo = await userDao.findOneUser(username, psw)
    if (userinfo) {
      //@ts-ignore
      createJWTToken(userinfo)
    }
    return userinfo
  }
}
export default UserService.userService
function createJWTToken(userinfo: Userinfo) {
  const token = jwt.sign({
    data: userinfo
  }, '114514', {
    expiresIn: '30h',
    header: {
      alg: 'HS256',
      typ: 'JWT'
    }
  })
  userinfo.token = token
}