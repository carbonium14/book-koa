import { sequelize } from "../../BaseDao"
import { DataTypes } from "sequelize"

class SecondCtgyModel {
  static createModel() {
    const model = sequelize.define(
      'secondctgy',
      {
        secondCtgyId: {
          type: DataTypes.INTEGER,
          field: 'secondCtgyId',
          primaryKey: true,
          autoIncrement: true
        },
        secondCtgyName: {
          type: DataTypes.STRING(20),
          field: 'secondCtgyName',
          allowNull: false
        },
        firstCtgyId: {
          type: DataTypes.INTEGER,
          field: 'firstCtgyId',
          allowNull: false
        },
      },
      {
        timestamps: false
      }
    )
    return model
  }
}
export const secondCtgyModel = SecondCtgyModel.createModel()