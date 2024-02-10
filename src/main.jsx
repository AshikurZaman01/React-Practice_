import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import Help from './Components/Pages/Help/Help';
import About from './Components/Pages/About/About';
import Users from './Components/Pages/Users/Users';
import ViewDetails from './Components/Pages/Users/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/help",
        element: <Help></Help>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/users",
        element: <Users></Users>
      },
      {
        path: "/user/:id",
        loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.id}`),
        element: <ViewDetails></ViewDetails>
      }


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
