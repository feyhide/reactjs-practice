import React,{useContext} from 'react'
import usercontext from '../../context/usercontext'


function Profile() {
    const {user} = useContext(usercontext)
    if(!user){
        return <div>Please login</div>
    }else{
        return <div>welcome {user.username}</div>
    }
}

export default Profile