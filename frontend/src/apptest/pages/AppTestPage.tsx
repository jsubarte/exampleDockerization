import { Container } from 'react-bootstrap'
import { GetData } from '../view'

export const AppTestPage = () => {
    return (
        <Container fluid className='w-100 vh-100'>
            <GetData />
        </Container>
    )
}