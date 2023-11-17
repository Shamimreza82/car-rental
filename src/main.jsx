import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router.jsx'
import '@fontsource/roboto/300.css';
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
