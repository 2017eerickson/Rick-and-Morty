import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
 

export default function CharacterCard({charactersData,addData,rmData}) {
    const navigate = useNavigate()

    

  return (
    <div id="cardHolder" className="flex flex-row max-block-fit flex-wrap">
        {
            charactersData ? 
            charactersData.map((character)=>(
                <Card id="card"  className=" size-50 m-2 rounded-4xl border-black">
                <Card.Img variant="top" className="p-2  bg-blue-200" src={character.image} />
                    <Card.Body className="flex justify-between flex-col  bg-green-500">
                        <Card.Title>Name: {character.name}</Card.Title>
                        <Card.Text>
                            Status: {character.status}
                        </Card.Text>
                        <Card.Text>
                            Origin Planet: {character.origin.name}
                        </Card.Text>
                        <div
                        className="flex flex-col gap-2"
                        >
                            <button 
                                className="bg-blue-400 rounded  "
                                // key={character.name}
                                id= {character.name.replaceAll(" ", "")}
                                variant="info"
                                onClick={()=>{navigate(
                                    `/characterdetails/${character.id}`
                                )}}
                                
                                >
                                View Details
                            </button>
                            <button
                                className="bg-green-400 rounded "
                                id='addfav'
                                onClick={()=>{addData(character)}}
                            >
                                Add to favorites
                            </button>
                            <button
                                className="bg-red-400 rounded "
                                id='removefav'
                                onClick={()=>{rmData(character.id)}}
                            >
                                Delete favorite
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            ))
            :null
        }
    </div>
  )
}
