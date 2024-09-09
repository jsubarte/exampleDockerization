import { Server } from './models'
import 'dotenv/config'

const main = async (): Promise<void> => {
    const server: Server = new Server()

    server.listen()
}

main()