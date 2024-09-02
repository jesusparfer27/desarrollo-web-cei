import { RouterProvider } from 'react'
import Layout from '../Layout.jsx'
import { createRoot } from 'react-dom/client'

import { createRoot } from 'react-dom/client'
import router 
import App from '../App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>
)
