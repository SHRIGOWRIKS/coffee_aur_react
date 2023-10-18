import React from 'react'
import UserContext from '../context/UserContext'
import {useContext} from 'react'

const Profile = () => {
    const {user}=useContext(UserContext)
  
    if(!user) return <p>Please login</p>

    return (
        <div>Welcome {user.username}</div>
    )

  
}

export default Profile
