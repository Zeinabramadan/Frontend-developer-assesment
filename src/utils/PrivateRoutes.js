import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../redux/slices/auth";

const PrivateRoutes = ({children, ...rest}) => {
  const user = useSelector(selectCurrentUser)

  return ( user ? <Outlet/> : <Navigate to="/" />)
}

export default PrivateRoutes;
