import { Request, Response } from 'express'

const ctrlTest = async ( _: Request, res: Response ) => {
    try {
        return res.status(200).json({ success: true, message: 'Request Success', data: null })
    } catch (error) {
        console.error(`Error ctrlTest: ${ error }`)
        return res.status(500).json({ success: false, message: `Server Error ctrlTest: ${ error }`, data: null })
    }
}

export {
    ctrlTest
}