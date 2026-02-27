import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function FavoriteCharactersPage() {
    const {charactersData,favCharactersData,addData,rmData} = useOutletContext()
    const[favCharactersName,setFavCharactersName] = useState(null)
    const navigate = useNavigate()

    console.log(favCharactersData)
     const handleSubmit =(e) =>{
        e.preventDefault()
        let favChar = (charactersData.filter((character)=>(
            favCharactersName === character.name.toLowerCase() 
                )
            )
        )
        addData(favChar[0])
        console.log(favChar)
    }

  return (
    <div className=" flex  flex-col justify-center">
        <form className = 'text-center' onSubmit={handleSubmit}>
            <input
                className="bg-white rounded p-1"
                type="text"
                value={favCharactersName}
                onChange={(e) =>  setFavCharactersName(e.target.value)}
                placeholder="Enter character name"
                >
            </input>
            <input className="bg-white rounded-e-full m-2 p-1" type="submit"/>     
        </form>
    <div id='cardHolder' className="flex flex-row max-block-fit flex-wrap">
        {favCharactersData ? 
            favCharactersData.map((character)=>(
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
                            variant="dark"
                            onClick={()=>{addData(character)}}
                            >
                                Add to favorites
                            </Button>
                            <Button
                            onClick={()=>{rmData(character.id)}}
                            variant="danger"
                            >
                                Delete favorite
                            </Button>
                    </Card.Body>
                </Card>
            ))
            :
            <h1 className='mx-auto mt-5'>No favorites choosen yet..</h1>        
            }
        </div>
    </div>
  )
}
