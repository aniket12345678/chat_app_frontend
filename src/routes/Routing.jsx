import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AllRoutes } from './AllRoutes';

const router = createBrowserRouter(AllRoutes);

const Routing = () => {
  return <RouterProvider router={router} />
}

export default Routing
