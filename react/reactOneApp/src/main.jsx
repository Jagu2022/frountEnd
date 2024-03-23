import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Todo from './Todo.jsx';
import Counter from './Counter.jsx';
import Countries from './Countries.jsx';
import CountieDetails from './CountieDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/todo',
        element: <Todo/>
      },
      {
        path: '/counter',
        element: <Counter/>
      },
      {
        path: '/countires',
        element: <Countries/>,
        children:[
          {
            path: '/countires/countieDetails/:cname',
            element: <CountieDetails/>
          }
        ]
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);