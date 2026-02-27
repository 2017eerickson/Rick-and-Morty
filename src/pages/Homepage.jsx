import axios from "axios"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";


const Homepage = () => {
    // const[searchChar, setSearchChar] = useState(null)
    // const[charId, setCharId] = useState(null)
    // const[charName, setCharName] = useState('')

    const navigate = useNavigate()
    const {charactersData,charId,setCharId,charName,setCharName,searchChar,setSearchChar} = useOutletContext()

    async function fetchCharacter(){
        let url = `https://rickandmortyapi.com/api/character/${charId}`
        let response = await axios.get(url)
        addData(response.data)
        // console.log(response.data)
        // console.log("here")

    }

    const addData = (data) => {
        setSearchChar([...searchChar,data])

    }
    const rmData = (id) => {
        setSearchChar(
            searchChar.filter((character)=>{
            character.id !== id
        }))
        // console.log(searchChar)
    }

    useEffect(()=>{

    },[searchChar])

    const handleSubmit =(e) =>{
        e.preventDefault()
       
        charactersData.map((character)=>{
            // console.log(character.name, charName)
            if (character.name == charName){
                setCharId(character.id)
            }
        })  
        // console.log(charId)
        // console.log("no here")

        charId && fetchCharacter()

    }

    return(
        <div className=" min-h-screen m-2">
            <form className='text-center'onSubmit={handleSubmit}>
                <input
                    className="bg-white rounded p-1"
                    type="text"
                    value={charName}
                    onChange={(e) => setCharName(e.target.value)}
                    placeholder="Enter character name"
                    >
                </input>
                <input className="bg-white rounded-e-full m-2 p-1" type="submit"/>     
            </form>
            <div className="flex flex-row max-block-fit flex-wrap">
                { searchChar ?
                    searchChar.map((character)=>(
                   
                        <Card style={{ width: '50vmin' }} className=" m-2 rounded-4xl border-black">
                            <Card.Img variant="top" className="p-4  bg-blue-200" src={character.image} />
                            <Card.Body className="flex jusity-center flex-col  bg-green-500">
                                <Card.Title>Name: {character.name}</Card.Title>
                                <Card.Text>
                                    Status: {character.status}
                                </Card.Text>
                                <Button 
                                    variant="primary"
                                    onClick={()=>{navigate(
                                        `/characterdetails/${character.id}`
                                    )}}
                                    >
                                    View Details
                                </Button>
                                <Button 
                                    variant="danger"
                                    onClick={
                                        rmData(character.id)
                                        
                                    }
                                    >
                                    delete character
                                </Button>
                            </Card.Body>
                        </Card>
                ))
                :
                null
                }
            </div>
        </div>
    )
}

export default Homepage
