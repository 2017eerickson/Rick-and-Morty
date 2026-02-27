import { useEffect, useState } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import CharactercharactersData from "./CharacterDetails";

const CharacterPage = () => {

    const[nextPage, setNextPage] = useState('')
    const[prevPage, setPrevPage] = useState('')
    const navigate = useNavigate()
    const {charactersData,setCharactersData,addData,rmData} = useOutletContext()

    async function fetchInitialData(){
        let url = `https://rickandmortyapi.com/api/character`
        let response = await axios.get(url)
        setCharactersData(response.data.results)
        setNextPage(response.data.info['next'] && response.data.info["next"])
        
    }
    useEffect(()=>{
       fetchInitialData()
    },)

    // useEffect(()=>{
    //      setCharactersData()
    // },[nextPage,prevPage])

    async function fetchNextPage(){
        console.log(charactersData)

        let url = nextPage
        let response = await axios.get(url)
        setNextPage(response && response.data.info['next'])
        setPrevPage(response.data.info["prev"] && response.data.info["prev"])

        setCharactersData(response.data.results)
        //why is setCharcterData not working when what were setting it to(response.data.results) is correct ?

        console.log(response.data.results)
        
    }
     async function fetchPrevPage(){

        let url = prevPage
        let response = await axios.get(url)
        setPrevPage(response.data.info["prev"] && response.data.info["prev"])

        setCharactersData(response.data.results)
        //why is setCharcterData not working when what were setting it to(response.data.results) is correct ?
        console.log(response.data.results)
        // console.log(charactersData)
    }
    
    return (
        <> 
            <div className=" flex justify-between px-10">
                <Button variant="primary"
                    onClick={() => fetchPrevPage()}>
                    Prev
                </Button>
            
                <Button variant="primary"
                    onClick={() => fetchNextPage()}>
                    Next
                </Button>
            </div>
            <div id="cardHolder" className="flex flex-row max-block-fit flex-wrap">
                {charactersData ? 
                    charactersData.map((character)=>(
                        <Card id="card" style={{ width: '50vmin' }} className=" m-2 rounded-4xl border-black">
                        <Card.Img variant="top" className="p-4  bg-blue-200" src={character.image} />
                            <Card.Body className="flex jusity-center flex-col  bg-green-500">
                                <Card.Title>Name: {character.name}</Card.Title>
                                <Card.Text>
                                    Status: {character.status}
                                </Card.Text>
                                <Card.Text>
                                    Origin Planet: {character.origin.name}
                                </Card.Text>
                                <Button 
                                    // key={character.name}
                                    id= {character.name.replaceAll(" ", "")}
                                    variant="info"
                                    onClick={()=>{navigate(
                                        `/characterdetails/${character.id}`
                                    )}}
                                    >
                                    View Details
                                </Button>
                                <Button
                                    id='addfav'
                                    variant="dark"
                                    onClick={()=>{addData(character)}}
                                >
                                    Add to favorites
                                </Button>
                                <Button
                                    id='removefav'
                                    onClick={()=>{rmData(character.id)}}
                                    variant="danger"
                                >
                                    Delete favorite
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                    :null
                }
            </div>
        </>
    )
}

export default CharacterPage