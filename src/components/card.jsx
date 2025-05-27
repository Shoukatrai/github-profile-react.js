import React from 'react'

const Card = ({userProfile}) => {
    console.log("userProfile" , userProfile.data.login)
    console.log("username" , userProfile.data.login)
    console.log("location" , userProfile.data.location)
    console.log("bio" , userProfile.data.bio)
    console.log("follower" , userProfile.data.followers)
    console.log("following" , userProfile.data.following)
    console.log("imageurl" , userProfile.data.avatar_url)
    console.log("name" , userProfile.data.name)
  return (
    <div>
      <h1>{  "abdhsdhsh"}</h1>
      <img src= {null} alt="Git hub profile image" />
    </div>
  )
}

export default Card
