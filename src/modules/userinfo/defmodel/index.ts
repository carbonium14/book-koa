import { sequelize } from "../../BaseDao"
import { DataTypes } from 'sequelize'
class Userinfo {
  static createModel() {
    const model = sequelize.define('userinfo', {
      userid: {
        type: DataTypes.INTEGER,
        field: 'userid',
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(30),
        field: 'username',
        allowNull: false
      },
      psw: {
        type: DataTypes.STRING(20),
        field: 'psw',
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(50),
        field: 'address',
        allowNull: true
      },
      valid: {
        type: DataTypes.TINYINT,
        field: 'valid',
        allowNull: true
      }
    }, {
      // freezeTableName: true,
      timestamps: false
    })
    // model.sync({
    //   force: false
    // })
    return model
  }
}
export const model = Userinfo.createModel()