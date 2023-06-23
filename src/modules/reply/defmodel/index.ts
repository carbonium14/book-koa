import { DataTypes } from 'sequelize'
import { sequelize } from '../../../modules/BaseDao'
class ReplyModel {
  static createModel() {
    const model = sequelize.define('reply', {
      replyid: {
        type: DataTypes.INTEGER,
        field: 'replyid',
        primaryKey: true,
        autoIncrement: true,
      },
      replycontent: {
        type: DataTypes.STRING(255),
        field: 'replycontent',
        allowNull: true,
      },
      replydate: {
        type: DataTypes.DATEONLY,
        field: 'replydate',
        allowNull: false,
      },
      evalid: {
        type: DataTypes.INTEGER,
        field: 'evalid',
        allowNull: false,
      },
      replyor: {
        type: DataTypes.STRING(20),
        field: 'replyor',
        allowNull: false,
      }
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const replyModel = ReplyModel.createModel()