import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((store)=> store.feed)
  return (
    <EditProfile user={user} />
  )
}

export default Profile