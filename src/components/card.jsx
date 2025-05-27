import React from 'react'

const Card = ({userProfile}) => {
  return (
    <div className='text-center flex flex-col gap-3 p-3 justify-center items-center bg-black text-white rounded-2xl' >
      <h1 className='text-2xl'>Name: {userProfile?.data?.name || "shoukat"}</h1>
      <h1>{userProfile?.data?.login || "abdhsdhsh"}</h1>
      <img src={userProfile?.data?.avatar_url || ""} alt="Git hub profile image"  className='rounded-full sm:w-100% h-100% lg:w-100 lg:h-100'/>
      <h2>{userProfile?.data?.bio || "web developer"}</h2>
      <h2>{userProfile?.data?.location || "Karachi"}</h2>
      <h2>follower: {userProfile?.data?.followers || "0"}</h2>
      <h2>following: {userProfile?.data?.following || "0"}</h2>
    </div>
  )
}

export default Card