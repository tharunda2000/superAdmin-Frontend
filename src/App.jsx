import React from 'react'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import { Toaster } from 'react-hot-toast';

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
  ]);

  return (
    <div>
      <Toaster position="top-center"/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
