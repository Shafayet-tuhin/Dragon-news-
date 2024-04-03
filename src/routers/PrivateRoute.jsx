import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext) 
 

    if ( user) {
        return children 
    }

    return <Navigate to= '/login' />
}

export default PrivateRoute