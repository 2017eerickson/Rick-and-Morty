import axios from "axios"
import { useEffect, useState } from "react"

export default function About() {
  const [aboutData,setAboutData] = useState()

// "https://www.tvmaze.com/shows/216/rick-and-morty"

  const fetchdata = async () =>{
    let url = "https://api.tvmaze.com/search/shows?q=rick"
    let response = await axios.get(url)
    setAboutData(response.data[1].show)
  }
  useEffect(()=>{
    fetchdata()
  })
  console.log(aboutData)
  return (
    <div>
      <h1>About</h1>

      <div id="about" className=" min-h-screen m-10 text-center" > 
          <h1>{aboutData.name}</h1>
          <p>Description {}</p>
      </div>

    </div>
  )
  
}
