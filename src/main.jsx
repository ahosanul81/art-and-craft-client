import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootFile from './Layout/RootFile.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import AddCraftItem from './Admin/AddCraftItem.jsx';
import MyCraftItem from './Components/Pages/MyCraftItem.jsx';
import TextileProvider from './Context/TextileProvider.jsx';
import Login from './Components/Pages/Login.jsx';
import SignUp from './Components/Pages/SignUp.jsx';
import UpdateCraftItem from './Admin/UpdateCraftItem.jsx';
import CraftDetails from './Components/Pages/CraftDetails.jsx';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import AllArtCraftItem from './Components/Pages/AllArtCraftItem.jsx';
import CategoryBasedItem from './Components/Pages/CategoryBasedItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile></RootFile>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category_based_item",
        element: <CategoryBasedItem></CategoryBasedItem>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>
      },
      {
        path: "/all_art_and_crafts",
        element: <AllArtCraftItem></AllArtCraftItem>
      },
      {
        path: "/craft_item_detail/:id",
        element: <ProtectedRoute><CraftDetails></CraftDetails></ProtectedRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/craft_item_detail/${params.id}`)
      },
      {
        path: "/add_craft_item",
        element: <ProtectedRoute><AddCraftItem></AddCraftItem></ProtectedRoute>,
      },
      {
        path: "/update_craft_item/:id",
        element: <UpdateCraftItem></UpdateCraftItem>,
        loader: ({params})=> fetch(`http://localhost:5000/update_craft_item/${params.id}`) 
      },
      {
        path: "/my_art_and_craft",
        element: <ProtectedRoute><MyCraftItem></MyCraftItem></ProtectedRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextileProvider>
      <RouterProvider router={router} />
    </TextileProvider>
  </React.StrictMode>,
)
