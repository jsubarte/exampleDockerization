import express, { Application } from 'express'
import cors, { CorsOptions } from 'cors'
import { rtrTest } from '../routes'

interface Routes {
    test: string
}

class Server {
    private app: Application
    private hostname: string
    private hostfront: string
    private port: string
    private portfront: string
    private paths: Routes

    constructor(){
        this.app = express()
        this.port = process.env.HOSTPORT || '5174'
        this.hostname = process.env.HOSTNAME || 'backendapptest'
        this.hostfront = process.env.HOSTFRONT || 'desktop-4a3f1kt'
        this.portfront = process.env.PORTFRONT || '5175'
        this.paths = {
            test: '/api/v1/test'
        }

        this.middlewares()

        this.routes()
    }

    private middlewares(){
        const corsOptions: CorsOptions = {
            origin: `http://${this.hostfront}:${this.portfront}`,
            methods: 'GET, POST, PUT, PATCH, DELETE',
            allowedHeaders: [ 'Content-Type', 'Authorization' ]
        }

        this.app.use(cors(corsOptions))
        this.app.use(express.json())
    }

    private routes(){
        this.app.use(this.paths.test, rtrTest)
    }

    public listen(){
        this.app.listen( parseInt(this.port), this.hostname, () => {
            try {
                console.log(`Aplicacion ejecutandose en ${ this.hostname } en el puerto ${ this.port }`)
            } catch (error) {
                console.error(`Error listen: ${ error }`)
            }
        } )
    }

}

export {
    Server
}