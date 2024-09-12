import { Response, Request } from 'express'
import { Luna } from '../models'

const regisLuna = async(req: Request, res: Response) => {
    try {
        const { nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm } = req.body

        const luna = new Luna({ nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm })

        // Guardar en Base de Datos
        await luna.save()

        res.status(201).json({ success: true, message: `Creación de luna exitosa`, data: { nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getAllLuna = async( _: Request, res: Response) => {
    try {
        const lunas = await Luna.findAll()
        res.status(200).json({ success: true, message: `Obtención de lunas exitosa`, data: lunas })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getLunaById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const luna = await Luna.findByPk(id)
        res.status(200).json({ success: true, message: `Obtención de la lunas ${ id } exitosa`, data: luna })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const udtLuna = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm } = req.body
    
        const luna = await Luna.update({ nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm },{ where: { campoId: id } })

        res.status(200).json({ success: true, message: `Se actualizo ${ luna } registro(s)`, data: { nombre, planetaId, diametroKm, masaKg, distanciaPlanetaKm } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const dltLuna = async(req: Request, res: Response) => {
    try {
        const { id } = req.params

        const luna = await Luna.destroy({ where: { id } })

        res.status(200).json({ success: true, message: `Se elimino ${luna} registro(s)`, data: null })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

export {
    regisLuna,
    getAllLuna,
    getLunaById,
    udtLuna,
    dltLuna
}