import axios from 'axios'
import React, { useState } from 'react'
import Card from './components/card'

const App = () => {
  const [userName, setUserName] = useState("")
  const [userProfile, setUserProfile] = useState("")


  const getProfile = async () => {
    const profile = await axios.get(`https://api.github.com/users/${userName}`)
    console.log("profile", profile)
    setUserProfile(profile)
  }

const handleSubmit = (event)=>{
  event.preventDefault()
  getProfile()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </form>

      <Card userProfile = {userProfile}/>
    </div>
  )
}

export default App
