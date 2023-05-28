import { sequelize } from "../../BaseDao"
import { DataTypes } from "sequelize"

class ThirdCtgyModel {
  static createModel() {
    const model = sequelize.define(
      'thirdctgy',
      {
        thirdCtgyId: {
          type: DataTypes.INTEGER,
          field: 'thirdCtgyId',
          primaryKey: true,
          autoIncrement: true
        },
        thirdName: {
          type: DataTypes.STRING(20),
          field: 'thirdName',
          allowNull: false
        },
        secCtgyId: {
          type: DataTypes.INTEGER,
          field: 'secCtgyId',
          allowNull: true
        },
      },
      {
        timestamps: false
      }
    )
    return model
  }
}
export const thirdCtgyModel = ThirdCtgyModel.createModel()