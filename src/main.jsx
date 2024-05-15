import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <AuthProvider>
      <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      </HelmetProvider>
    </AuthProvider>
  </div>
)
