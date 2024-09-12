import { Response, Request } from 'express'
import { TipoPlaneta } from '../models'

const regisTipoPlaneta = async(req: Request, res: Response) => {
    try {
        const { nombre } = req.body

        const typePlanet = new TipoPlaneta({ nombre })

        // Guardar en Base de Datos
        await typePlanet.save()

        res.status(201).json({ success: true, message: `Creación del tipo de planeta exitosa`, data: { nombre } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getAllTipoPlaneta = async( _: Request, res: Response) => {
    try {
        const typePlanets = await TipoPlaneta.findAll()
        res.status(200).json({ success: true, message: `Obtención de los tipos de planeta exitosa`, data: typePlanets })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const getTipoPlanetaById = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const typePlanet = await TipoPlaneta.findByPk(id)
        res.status(200).json({ success: true, message: `Obtención del tipo de planeta ${ id } exitosa`, data: typePlanet })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const udtTipoPlaneta = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { nombre } = req.body
    
        const typePlanet = await TipoPlaneta.update({ nombre },{ where: { id } })

        res.status(200).json({ success: true, message: `Se actualizo ${typePlanet} registro(s)`, data: { nombre } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

const dltTipoPlaneta = async(req: Request, res: Response) => {
    try {
        const { id } = req.params

        const typePlanet = await TipoPlaneta.destroy({ where: { id } })

        res.status(200).json({ success: true, message: `Se elimino ${typePlanet} registro(s)`, data: null })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Error: ${error}`, data: null })
    }
}

export {
    regisTipoPlaneta,
    getAllTipoPlaneta,
    getTipoPlanetaById,
    udtTipoPlaneta,
    dltTipoPlaneta
}