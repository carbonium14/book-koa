import { DataTypes } from 'sequelize'
import { sequelize } from '../../BaseDao'
class HistorykeywordModel {
  static createModel() {
    const model = sequelize.define('historykeyword', {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      historykeyword: {
        type: DataTypes.STRING(30),
        field: 'historykeyword',
        allowNull: false,
      },
      clickcount: {
        type: DataTypes.INTEGER,
        field: 'clickcount',
        allowNull: true,
      },
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const historykeywordModel = HistorykeywordModel.createModel()