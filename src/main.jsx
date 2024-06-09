import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dprod from './components/Dprod.jsx'
import Product from './components/Product.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from './components/Header.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
          {
            path:'/',
            element:<Dprod/>
          },
          {
            path:'/products',
            element:<Product/>
          }
      ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
