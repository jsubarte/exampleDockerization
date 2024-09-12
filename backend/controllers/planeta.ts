import { Response, Request } from 'express'
import { Planeta } from '../models'

const regisPlaneta = async(req: Request, res: Response) => {
    try {
        const { nombre, diametroKm, masaKg, distanciaSolKm } = req.body

        const planeta = new Planeta({ nombre, diametroKm, masaKg, distanciaSolKm })

        // Guardar en Base de Datos
        await planeta.save()

        res.status(201).json({ success: true, message: `Creación de planeta exitosa`, data: { nombre, diametroKm, masaKg, distanciaSolKm } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getAllPlaneta = async( _: Request, res: Response) => {
    try {
        const planetas = await Planeta.findAll()
        res.status(200).json({ success: true, message: `Obtención de planetas exitosa`, data: planetas })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getPlanetaById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const planeta = await Planeta.findByPk(id)
        res.status(200).json({ success: true, message: `Obtención del planeta ${ id } exitosa`, data: planeta })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const udtPlaneta = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { nombre, diametroKm, masaKg, distanciaSolKm } = req.body
    
        const planeta = await Planeta.update({ nombre, diametroKm, masaKg, distanciaSolKm },{ where: { id } })

        res.status(200).json({ success: true, message: `Se actualizo ${ planeta } registro(s) exitosamente`, data: { nombre, diametroKm, masaKg, distanciaSolKm } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const dltPlaneta = async(req: Request, res: Response) => {
    try {
        const { id } = req.params

        const planeta = await Planeta.destroy({ where: { id } })

        res.status(200).json({ success: true, message: `Se elimino ${ planeta } registro(s)`, data: null })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

export {
    regisPlaneta,
    getAllPlaneta,
    getPlanetaById,
    udtPlaneta,
    dltPlaneta
}