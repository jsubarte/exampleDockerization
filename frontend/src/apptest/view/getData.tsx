import { useEffect } from 'react'
import { useAppSelector, useGetDataStore } from '../../hooks'
import { Col, Row } from 'react-bootstrap'


export const GetData = () => {
    const { getDataTest } = useGetDataStore()
    const { listData } = useAppSelector( state => state.data )

    useEffect(() => {
        document.body.style.backgroundColor = 'var(--bs-light)'
        getDataTest()
    }, [])
    
    return (
        <>
            {
                listData.message.length > 0
                ? (
                    <Row>
                        <Col className='col-4'>Exito: { listData.success ? 'True' : 'False' }</Col>
                        <Col className='col-4'>Mensaje: { listData.message }</Col>
                        <Col className='col-4'>Datos: Sin datos</Col>
                    </Row>
                )
                : (<h1>Loading....</h1>)
            }
        </>
    )
}
