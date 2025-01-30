import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Contacts from './Components/Contacts.jsx'
import Layout from './Components/Layout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Company from './company/Company.jsx'
import Home from './Components/Home.jsx'
import Airplanes from './planes/Airplanes.jsx'
import Owners from './owners/Owners.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/company",
        element:<Company />
      },
      // {
      //   path:"/app",
      //   element:<App />
      // },
      {
        path:"/planes",
        element:<Airplanes />
      },
      {
        path:"/owners",
        element:<Owners />
      },
      {
        path:"/contacts",
        element:<Contacts />
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
