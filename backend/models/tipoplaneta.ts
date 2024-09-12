import { DataTypes, Model } from 'sequelize'
import { dbConnection } from '../database/config'

class TipoPlaneta extends Model{
   declare id: number
   declare nombre: string
}

TipoPlaneta.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    sequelize: dbConnection,
    timestamps: false,
    modelName: 'TipoPlaneta',
    tableName: 'TipoPlanetas'
  }
)

export{
    TipoPlaneta
}