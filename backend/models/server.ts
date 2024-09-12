import express, { Application } from 'express'
import cors, { CorsOptions } from 'cors'
import { rtrLuna, rtrPlaneta, rtrTest, rtrTipoPlaneta } from '../routes'
import { testConnection } from '../database/config'

interface Routes {
    luna: string
    planeta: string
    test: string
    tipoplaneta: string
}

class Server {
    private app: Application
    private hostname: string
    private hostfront: string
    private port: string
    private paths: Routes

    constructor(){
        this.app = express()
        this.port = process.env.HOSTPORT || '5174'
        this.hostname = process.env.HOSTNAME || 'backendapptest'
        this.hostfront = process.env.HOSTFRONT || 'http://desktop-4a3f1kt:5175'
        this.paths = {
            luna: '/api/v1/luna',
            planeta: '/api/v1/planeta',
            test: '/api/v1/test',
            tipoplaneta: '/api/v1/tipoplaneta'
        }

        this.middlewares()

        this.routes()
    }

    private middlewares(){
        const corsOptions: CorsOptions = {
            origin: `${this.hostfront}`,
            methods: 'GET, POST, PUT, PATCH, DELETE',
            allowedHeaders: [ 'Content-Type', 'Authorization' ]
        }

        this.app.use(cors(corsOptions))
        this.app.use(express.json())
    }

    private routes(){
        this.app.use(this.paths.luna, rtrLuna)
        this.app.use(this.paths.planeta, rtrPlaneta)
        this.app.use(this.paths.test, rtrTest)
        this.app.use(this.paths.tipoplaneta, rtrTipoPlaneta)
    }

    public listen(){
        this.app.listen( parseInt(this.port), this.hostname, () => {
            try {
                console.log(`Aplicacion ejecutandose en ${ this.hostname } en el puerto ${ this.port }`)
                testConnection()
            } catch (error) {
                console.error(`Error listen: ${ error }`)
            }
        } )
    }

}

export {
    Server
}