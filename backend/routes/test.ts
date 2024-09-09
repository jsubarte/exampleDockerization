import { Router } from 'express'
import { ctrlTest } from '../controllers'

const rtrTest: Router = Router()

rtrTest.get('/', [], ctrlTest)

export {
    rtrTest
}