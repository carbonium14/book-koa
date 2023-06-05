import { sequelize } from "../../BaseDao"
import { DataTypes } from "sequelize"

class FirstCtgyModel {
  static createModel() {
    const model = sequelize.define(
      'firstctgy',
      {
        firstCtgyId: {
          type: DataTypes.INTEGER,
          field: 'firstCtgyId',
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(20),
          field: 'name',
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
export const firstCtgyModel = FirstCtgyModel.createModel()