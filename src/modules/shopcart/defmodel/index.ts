import { DataTypes } from 'sequelize'
import { sequelize } from '../../../modules/BaseDao'
class ShopCartModel {
  static createModel() {
    const model = sequelize.define('shopcart', {
      shopcartid: {
        type: DataTypes.INTEGER,
        field: 'shopcartid',
        primaryKey: true,
        autoIncrement: true,
      },
      bookisbn: {
        type: DataTypes.STRING(20),
        field: 'bookisbn',
        allowNull: false,
      },
      bookname: {
        type: DataTypes.STRING(30),
        field: 'bookname',
        allowNull: false,
      },
      bookpicname: {
        type: DataTypes.STRING(60),
        field: 'bookpicname',
        allowNull: false,
      },
      bookprice: {
        type: DataTypes.INTEGER,
        field: 'bookprice',
        allowNull: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        field: 'userid',
        allowNull: false,
      },
      purcharsenum: {
        type: DataTypes.INTEGER,
        field: 'purcharsenum',
        allowNull: true,
      },
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const shopCartModel = ShopCartModel.createModel()
