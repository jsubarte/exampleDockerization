import { DataTypes, Model } from 'sequelize'
import { dbConnection } from '../database/config'

class Luna extends Model{
    declare id: number
    declare nombre: string
    declare planetaID: number
    declare diametroKm: number
    declare masaKg: number
    declare distanciaPlanetaKm: number
}

Luna.init(
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
    planetaID: {
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
    distanciaPlanetaKm: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
  },{
    sequelize: dbConnection,
    modelName: 'Luna',
    tableName: 'Lunas'
  }
)

export{
    Luna
}