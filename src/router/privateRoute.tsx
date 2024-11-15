import { Navigate } from "react-router-dom";
import { getToken } from "../helpers/getToken";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = getToken();
  console.log("token", token)
  return token ? <>{children}</> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
