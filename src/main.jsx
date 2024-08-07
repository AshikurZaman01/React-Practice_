import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Watches from './Components/Pages/Watches/Watches';
import About from './Components/Pages/About/About';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import WatchDetails from './Components/Pages/Watches/WatchDetails';





const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/watches',
        loader: () => fetch('../public/watches.json'),
        element: <Watches></Watches>
      },
      {
        path: '/watch/:id',
        loader: ({ params }) => fetch(`../public/watches.json?id=${params.id}`),
        element: <WatchDetails></WatchDetails>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);
//`../public/watches.json?id=${params.id}`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
