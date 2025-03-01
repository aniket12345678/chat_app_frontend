import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isLoggedIn } = useSelector((x) => x.authSlice);
    return isLoggedIn ? <Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoute