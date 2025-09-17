import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import Context from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <App/>
  </Context>
   
  ,
)
