import React from 'react'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './Pages/HomePage';

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
