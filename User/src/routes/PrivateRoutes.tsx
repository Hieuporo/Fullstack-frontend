import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectCurrentAccessToken } from "../features/auth/authSlice";

const PrivateRoutes = () => {
  const token = useSelector(selectCurrentAccessToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
