import { useState, useEffect } from 'react'

const User = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        try {
            
        } catch (e) {
            console.log("error", e)
        }
    }

    return ( <>
        {
            user.map({users}) = () => {
                <div key={id}></div>
            }
        }
    </> );
}
 
export default User;