interface IData {
    success: boolean
    message: string
    data: null
}

interface IPlanet {
    id: number
    nombre: string
    tipoID: number
    diametroKm: number
    masaKg: number
    distanciaSolKm: number
}

export type {
    IData,
    IPlanet
}