import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './Form.jsx'
import Stopwatch from './Stopwatch.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Data from './Data.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path: '/form',
        element: <Form/>
      },
      {
        path: '/stopwatch',
        element: <Stopwatch/>
      },
      {
        path: '/data',
        element: <Data/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
