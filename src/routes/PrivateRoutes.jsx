import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {currentUser, loading} = useContext(AuthContext)
    console.log(currentUser)
    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    if(currentUser){
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoutes;