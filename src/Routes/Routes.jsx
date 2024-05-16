import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from '../Pages/Home/Home'
import Register from "../Pages/RegisterPage/Register";
import Login from "../Pages/Login/Login";
import AddAFoodItem from "../Pages/AddAFoodItemPage/AddAFoodItem";
import AllFoodPage from "../Pages/AllFoodPage/AllFoodPage";
import SingleFoodPage from "../Pages/SingleFoodPage/SingleFoodPage";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import Private from "../Protected/Private";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import MyAddedFoodItem from "../MyAddedFoodItemPage/MyAddedFoodItem";

import OrderedFood from "../Pages/MyOrderedFood/OrderedFood";
import Update from "../Pages/UpdateAproduct/Update";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
        path:'/singleFoodPage/:id',
        element:<SingleFoodPage></SingleFoodPage>,
        loader :({params}) => fetch (`http://localhost:5000/addFood/${params.id}`)
      },{
        path:'/foodPurchase/:id',
        element:<Private><FoodPurchase></FoodPurchase></Private>,
        loader :({params}) => fetch (`http://localhost:5000/addFood/${params.id}`)
        
      },
      {
        path: '/gallery',
        element : <Gallery></Gallery>
      },{
        path:'/my-added-food-items',
        element:<MyAddedFoodItem></MyAddedFoodItem>,
      },{
        path : '/myOrderedFood',
        element:<OrderedFood></OrderedFood>,
      },{
        path : '/update/:id',
        element: <Update></Update>,
        loader :({params}) => fetch (`http://localhost:5000/myFood/${params.id}`)

      }
    ]

    },
  ]);