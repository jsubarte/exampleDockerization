import { useEffect } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { useAppSelector, usePlanetasStore } from '../../hooks'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


export const GetData = () => {
    const { getPlanetData } = usePlanetasStore()
    const { listPlanet } = useAppSelector( state => state.planet )

    useEffect(() => {
        document.body.style.backgroundColor = 'var(--bs-light)'
        getPlanetData()
    }, [])
    
    return (
        <>
            {
                listPlanet.length > 0
                ?   <Table>
                        <Thead>
                            <Tr>
                                {
                                    Object.keys(listPlanet[0]).map(
                                        keyData => (
                                            <Th key={ keyData }>{ keyData }</Th>
                                        )
                                    )
                                }
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                listPlanet.map( 
                                    planet => (
                                        <Tr key={ planet.id }>
                                            {
                                                Object.values(planet).map(
                                                    ( val, subId ) => (
                                                        <Td key={ subId }>{ val }</Td>
                                                    )
                                                )
                                            }
                                        </Tr>
                                    )
                                )
                            }
                        </Tbody>
                    </Table>
                : (<h1>Loading....</h1>)
            }
        </>
    )
}
