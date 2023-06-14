import { DataTypes } from 'sequelize'
import { sequelize } from '../../BaseDao'
class KeywordModel {
  static createModel() {
    const model = sequelize.define('keyword', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      keyword: {
        type: DataTypes.STRING(30),
        field: 'keyword',
        allowNull: false,
      },
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const keywordModel = KeywordModel.createModel()