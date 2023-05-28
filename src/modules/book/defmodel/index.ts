import { DataTypes } from 'sequelize'
import { sequelize } from '../../../modules/BaseDao'
class BooksModel {
  static createModel() {
    const model = sequelize.define('books', {
      ISBN: {
        type: DataTypes.STRING(20),
        field: 'ISBN',
        primaryKey: true,
        allowNull: false,
      },
      bookname: {
        type: DataTypes.STRING(50),
        field: 'bookname',
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING(20),
        field: 'author',
        allowNull: false,
      },
      publishid: {
        type: DataTypes.INTEGER,
        field: 'publishid',
        allowNull: true,
      },
      publishername: {
        type: DataTypes.STRING(20),
        field: 'publishername',
        allowNull: true,
      },
      monthsalecount: {
        type: DataTypes.INTEGER,
        field: 'monthsalecount',
        allowNull: true,
      },
      bookpicname: {
        type: DataTypes.STRING(255),
        field: 'bookpicname',
        allowNull: true,
      },
      secondctgyid: {
        type: DataTypes.INTEGER,
        field: 'secondctgyid',
        allowNull: true,
      },
      thirdctgyid: {
        type: DataTypes.INTEGER,
        field: 'thirdctgyid',
        allowNull: true,
      },
      originalprice: {
        type: DataTypes.DOUBLE(10),
        field: 'originalprice',
        allowNull: true,
      },
      discount: {
        type: DataTypes.DOUBLE(6),
        field: 'discount',
        allowNull: true,
      },
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const booksModel = BooksModel.createModel()
