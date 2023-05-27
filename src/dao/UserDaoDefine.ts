import { Op } from "sequelize"
import { model } from "../definemodel"
import { Sequelize } from "sequelize-typescript"
export type Userinfo = {
  userId: number,
  username: string,
  psw: string,
  address: string,
  valid: number
}
class UserDaoDefine {
  static userDaoDefine: UserDaoDefine = new UserDaoDefine()
  addUser(userinfo: Userinfo) {
    return model.create(userinfo)
  }
  findAllUser() {
    return model.findAll({
      raw: true
    })
  }
  findByProps() {
    return model.findAll({
      raw: true,
      attributes: ['username', 'psw']
    })
  }
  findByUsmAndPsw(username: string, psw: string) {
    return model.findOne({
      raw: true,
      where: {
        [Op.or]: [
          { username },
          { psw }
        ]
      }
    })
  }
  findByLike(key: string) {
    const searchKey = `%${key}%`
    return model.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: searchKey
        }
      }
    })
  }
  findByUsmAndAddr() {
    return model.findAll({
      raw: true,
      where: {
        [Op.or]: [{ username: {
            [Op.like]: '王%'
          } }, { address: 'wuhan'}
        ]
      }
    })
  }
  countUserinfo() {
    return model.findAll({
      raw: true,
      group: 'address',
      attributes: ['address', [Sequelize.fn('count', Sequelize.col('valid')), 'totalCount']],
      where: {
        valid: 1
      }
    })
  }
  findUserWithPager(offset: number, pageSize: number) {
    return model.findAll({
      raw: true,
      limit: pageSize,
      offset
    })
  }
}
export default UserDaoDefine.userDaoDefine