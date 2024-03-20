import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import AppliedJObs from './Components/Pages/AppliedJobs/AppliedJObs';
import Blog from './Components/Pages/Blog/Blog';
import ExpertDetails from './Components/Pages/Experts/ExpertDetails';




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
        path: "/appliedJobs",
        element: <AppliedJObs></AppliedJObs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/expertDetails/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts/${params.id}`),
        element: <ExpertDetails></ExpertDetails>
      }



    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
