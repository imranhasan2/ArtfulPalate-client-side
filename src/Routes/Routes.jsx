import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from '../Pages/Home/Home'
import Register from "../Pages/RegisterPage/Register";
import Login from "../Pages/Login/Login";
import AddAFoodItem from "../Pages/AddAFoodItemPage/AddAFoodItem";
import AllFoodPage from "../Pages/AllFoodPage/AllFoodPage";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[{

        path : '/',
        element: <Home></Home>
      },{
        path : '/register',
        element : <Register></Register>
      },{
        path: '/login',
        element: <Login></Login>
      },{
        path:'/addAFoodItem',
        element:<AddAFoodItem></AddAFoodItem>
      },{
        path : '/allFood',
        element : <AllFoodPage></AllFoodPage>
        
      },{
        path:'/singleFoodPage',
        element:<SingleFoodPage></SingleFoodPage>
      }
    ]

    },
  ]);