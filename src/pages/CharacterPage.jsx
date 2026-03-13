import { useEffect, useState } from "react"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import { useOutletContext } from 'react-router-dom';
import CharacterCard from "../components/CharacterCard";
import { Spinner } from "react-bootstrap";

const CharacterPage = () => {

    const[nextPage, setNextPage] = useState('')
    const[prevPage, setPrevPage] = useState('')
    const {charactersData,setCharactersData, addData, rmData} = useOutletContext()

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
            { charactersData?
                <div>
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
                    <CharacterCard
                        charactersData={charactersData}
                        addData={addData}
                        rmData ={rmData}
                    />
                </div>
                :
                <Spinner animation="border" variant="light" />
            }
        </>
    )
}

export default CharacterPage