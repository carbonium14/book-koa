import DbConfig from "../conf/DbConfig"
import { Dialect } from "sequelize"
import { Sequelize } from "sequelize-typescript"
import path from 'path'
class BaseDao {
  static baseDao: BaseDao = new BaseDao()
  sequelize!: Sequelize
  constructor() {
    this.initSqlConf('mysql')
  }
  initSqlConf(dialect: Dialect) {
    let { host, user, password, database, port } = DbConfig.getConf()
    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect,
      define: {
        timestamps: false,
        freezeTableName: true
      },
      pool: {
        max: 10,
        min: 5,
        idle: 10000,
        acquire: 10000,
      }
    })
    
  }
  addModels() {
    const modelPath = path.join(process.cwd(), '/src/modules/decormodel')
    this.sequelize.addModels([modelPath])
  }
}
const baseDao = BaseDao.baseDao
baseDao.addModels()
export const { sequelize } = baseDao