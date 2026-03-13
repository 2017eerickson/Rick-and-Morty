import {  useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function CharactercharactersData() {

    const {id} = useParams()
    const {charactersData,setCharactersData} = useOutletContext()

    const fetchInitialData = async () => {
        let url = `https://rickandmortyapi.com/api/character/${id}`
        let response = await axios.get(url)
        setCharactersData(response.data)    
    }
    useEffect(()=>{
        fetchInitialData()
    },[])

    console.log(charactersData)
    
  return (
   <>
        {
            charactersData? 
            <div id="characterDetails" className='m-2 flex  flex-col items-center'>
                <h1 className='p-2'>Character Details:</h1>
                <Card style={{ width: '18rem' }} className='vw-10 vh-5'>
                    <Card.Img className=' p-3 rounded' variant="top" src={charactersData.image} />
                    <Card.Body className='p-1 '>
                        <Card.Title>{charactersData.name}</Card.Title>
                        <Card.Text>
                            Species: {charactersData.species}
                        </Card.Text>
                        <Card.Text>
                            Type: {charactersData.type}
                        </Card.Text>
                        <Card.Text>
                            Status: {charactersData.status}
                        </Card.Text>
                        <Card.Text>
                            Created: {charactersData.created}
                        </Card.Text>
                        {/* <Card.Text>
                            Espisode: {charactersData.episode[0]}
                        </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
            :
            <Spinner animation="border" variant="light" />

        }
    </>
  )
}
