import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import router from './Route/router'
import AuthProvider from './Auth/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
<Toaster position='top-right' reverseOrder={false}></Toaster>
</RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
