import DbConfig from "../conf/DbConfig"
import { Dialect } from "sequelize"
import { Sequelize } from "sequelize-typescript"
class BaseDaoDefine {
  static baseDaoOrm: BaseDaoDefine = new BaseDaoDefine()
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
      }
    })
  }
}
export const { sequelize } = BaseDaoDefine.baseDaoOrm