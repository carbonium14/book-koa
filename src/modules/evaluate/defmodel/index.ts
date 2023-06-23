import { DataTypes } from 'sequelize'
import { sequelize } from '../../../modules/BaseDao'
class EvaluateModel {
  static createModel() {
    const model = sequelize.define('evaluate', {
      evaluateid: {
        type: DataTypes.INTEGER,
        field: 'evaluateid',
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING(200),
        field: 'content',
        allowNull: false,
      },
      evaluator: {
        type: DataTypes.STRING(20),
        field: 'evaluator',
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING(20),
        field: 'isbn',
        allowNull: false,
      },
      headportrai: {
        type: DataTypes.STRING(30),
        field: 'headportrai',
        allowNull: false,
      },
      givealikenum: {
        type: DataTypes.INTEGER,
        field: 'givealikenum',
        allowNull: false,
      },
      evaluatedegree: {
        type: DataTypes.TINYINT,
        field: 'evaluatedegree',
        allowNull: false,
      },
      pubdate: {
        type: DataTypes.DATE,
        field: 'pubdate',
        allowNull: false,
      },
      isanonymous: {
        type: DataTypes.TINYINT,
        field: 'isanonymous',
        allowNull: false,
      }
    }, {
        // freezeTableName: true,
      timestamps: false,
    })
    return model
  }
}
export const evaluateModel = EvaluateModel.createModel()