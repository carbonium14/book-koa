import { secondCtgyModel } from './SecCtgyModel'
import { thirdCtgyModel } from './ThirdCtgyModel'
secondCtgyModel.hasMany(thirdCtgyModel, {
  as: 'thirdCtgy',
  foreignKey: 'secCtgyId'
})
thirdCtgyModel.belongsTo(secondCtgyModel, {
  foreignKey: 'secCtgyId',
  targetKey: 'secondCtgyId'
})
export default async function findSecThrdCtgysByFstCtgyId(firstCtgyId: number) {
  const result = await secondCtgyModel.findAll({
    // raw: true,
    where: {
      firstCtgyId
    },
    include: [{
      model: thirdCtgyModel,
      as: 'thirdCtgy'
    }]
  })
  return result
}