import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const error = () => {
        Swal.fire({
            icon: "error",
            title: "Please Login first",
        });
    };

    if (user) {
        return children;
    } 
    
        error(); 
        return <Navigate to="/login" />;
   
};

export default PrivateRoute;
