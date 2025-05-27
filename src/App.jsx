import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/card'

const App = () => {
  const [userName, setUserName] = useState("shoukatrai")
  const [userProfile, setUserProfile] = useState("")


  const getProfile = async () => {
    const profile = await axios.get(`https://api.github.com/users/${userName}`)
    if(!profile){
      alert("User Not Found!")
      return
    }
    console.log("profile", profile)
    setUserProfile(profile)
  }

  useEffect(() => {
    getProfile()
  }, [userName])

  const handleSubmit = (event) => {
    event.preventDefault()
    getProfile()
  }

  return (
    <div className='w-70% m-auto flex items-center justify-between flex-col gap-20 mt-3'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 text-center justify-center items-center '>
        <h1 className='text-2xl font-bold'>Get GitHub Profile</h1>
        <input 
        type="text" 
        onChange={e => setUserName(e.target.value)} 
        className='text-sm p-3 border rounded'
         placeholder='Enter your username' />
      </form>

      <Card userProfile={userProfile} />
    </div>
  )
}

export default App
