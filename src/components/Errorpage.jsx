import React, { useState } from 'react'

export default function Errorpage() {
    const[userErrorDescript,setErrorDecscript] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userErrorDescript)
    }

  return (
    <div>
        <h1>Somthing Went wrong</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <p> please describe what went wrong</p>
            <textarea 
                className=' border border-black'
                type="textarea" 
                rows={5}
                value={userErrorDescript}
                onChange={(e) => setErrorDecscript(e.target.value) }
            >
            </textarea>
            <input type="submit" />
        </form>
       
    </div>
  )
}
