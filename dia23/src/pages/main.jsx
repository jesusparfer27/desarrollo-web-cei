import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { createRoot } from 'react-dom/client'
import router from '../lib/routes/router'
import '../../src/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
)
