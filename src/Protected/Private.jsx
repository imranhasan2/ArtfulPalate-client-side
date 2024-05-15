import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


const Private = ({children}) => {

    const { user,loader } = useContext(AuthContext)
    const location = useLocation()

   
    if(loader){
        return <span className="loading loading-spinner loading-lg mt-5 mb-5 "></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default Private;