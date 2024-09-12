import { DataTypes, Model } from 'sequelize'
import { dbConnection } from '../database/config'

class Planeta extends Model{
   declare id: number
   declare nombre: string
   declare tipoID: number
   declare diametroKm: number
   declare masaKg: number
   declare distanciaSolKm: number
}

Planeta.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    diametroKm: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    masaKg: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    distanciaSolKm: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
  },{
    sequelize: dbConnection,
    timestamps: false,
    modelName: 'Planeta',
    tableName: 'Planetas'
  }
)

export{
    Planeta
}