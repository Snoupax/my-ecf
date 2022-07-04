import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const { logged } = useContext(LoginContext);
    return logged ? <Outlet /> : <Navigate to="/403" />;
};

export default PrivateRoute;
