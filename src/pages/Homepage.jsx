import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Spinner from 'react-bootstrap/Spinner';

const Homepage = () => {
    // const[searchChar, setSearchChar] = useState(null)
    // const[charId, setCharId] = useState(null)
    // const[charName, setCharName] = useState('')

    const navigate = useNavigate()
    // const {charactersData,charId,setCharId,charName,setCharName,searchChar,setSearchChar} = useOutletContext()
    const {addData,rmData,charactersData} = useOutletContext()

    // async function fetchCharacter(){
    //     let url = `https://rickandmortyapi.com/api/character/${charId}`
    //     let response = await axios.get(url)
    //     addData(response.data)
    //     // console.log(response.data)
    //     // console.log("here")

    // }

    // const addData = (data) => {
    //     setSearchChar([...searchChar,data])

    // }
    // const rmData = (id) => {
    //     setSearchChar(
    //         searchChar.filter((character)=>{
    //         character.id !== id
    //     }))
    //     // console.log(searchChar)
    // }

    useEffect(()=>{

    },[searchChar])

    const handleClick =(e) =>{
       setCharName(e.target.value)
        charactersData.map((character)=>{
            // console.log(character.name, charName)
            if (character.name == charName){
                setCharId(character.id)
            }
        })  
        // console.log(charId)
        // console.log("no here")
        // charId && fetchCharacter()

    }

    return(
        <div className=" min-h-screen m-2">
            <div className="flex flex-col jusify-center w-1/5 ">
                <input
                    className="bg-white rounded p-1 border border-black border-3"
                    type="text"
                    value={charName}
                    onChange={(e) => handleClick(e)}
                    placeholder="enter character name"
                    >
                </input>
                <button 
                     className="bg-white rounded  m-2"
                    onClick = {()=>{
                        navigate(`/characterdetails/${charId}`)
                    }}
                    >
                    Search
                </button>   
            </div>
            <div className="flex flex-row max-block-fit flex-wrap">
                { searchChar ?
                    <CharacterCard
                    charactersData={searchChar}
                    addData={addData}
                    rmData={rmData}
                    />
                :
                    <Spinner animation="border" variant="light" />

                }
            </div>
        </div>
    )
}

export default Homepage
