import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard';

export default function FavoriteCharactersPage() {
    const {charactersData,favCharactersData,addData,rmData} = useOutletContext()
    const[favCharactersName,setFavCharactersName] = useState(null)

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
            <CharacterCard
                charactersData={favCharactersData}
                addData={addData}
                rmData={rmData}
            />
            :
            <h1 className='mx-auto mt-5'>No favorites choosen yet..</h1>        
            }
        </div>
    </div>
  )
}
