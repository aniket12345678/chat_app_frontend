import Signin from '../pages/auth/Signin'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/home/Home'
import Signup from '../pages/auth/Signup'
import Layout from '../components/Layout'
import React from 'react'

const AuthRoutes = [
    {
        element: React.createElement(Signin),
        path: '/'
    },
    {
        element: React.createElement(Signup),
        path: '/signup'
    },
]

const GuardedRoutes = [
    {
        element: React.createElement(ProtectedRoute),
        children: [
            {
                element: React.createElement(Layout, { Page: Home }),
                path: '/home'
            },

        ]
    },
]

export const AllRoutes = [...AuthRoutes, ...GuardedRoutes];