
import './App.css'
import Header from "./components/Header"
import {Outlet} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
    const [charactersData, setCharactersData] = useState(null)
    const[searchChar, setSearchChar] = useState([])
    const[charId, setCharId] = useState(null)
    const[charName, setCharName] = useState('')
    const[favCharactersData,setFavCharactersData] = useState(null)

    const fetchInitialData = async (func) => {
        let url = `https://rickandmortyapi.com/api/character`
        let response = await axios.get(url)
        func(response.data.results)    
    }

     useEffect(()=>{
            fetchInitialData(setCharactersData)
        },[])

    const addData = (data) => {
        favCharactersData ?
                favCharactersData.length >= 4 ? alert("Only 4 favoritess aloud, remove one or deal with it.")
                :
                setFavCharactersData([...favCharactersData, data])
            :
            setFavCharactersData([data])
            console.log(favCharactersData)
        }

    const rmData = (id) =>{
        setFavCharactersData(favCharactersData.filter((character)=>(
            character.id !== id

        )))
    }

  return (
    <>
      <div className='bg-lime-600'>
        <Header />
        <div className='flex justify-center '>
         <img id= "banner" className= 'w-md rounded' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSBVi1w1y2Kbx_d1SOA0qvFGY_S2VHhpDJznUAUFByGJmkgYlEUZ-uMs&s"></img>
        </div>
        <Outlet
          context={{
            charactersData, 
            setCharactersData,
            fetchInitialData,
            searchChar,
            setSearchChar,
            charName,
            setCharName,
            charId,
            setCharId,
            favCharactersData,
            setFavCharactersData,
            addData,
            rmData
          }}
        /> 
      </div>
    </>
  )
}

export default App
