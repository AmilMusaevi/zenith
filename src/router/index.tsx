import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Header from "../layout/header";
import PrivateRoute from "./privateRoute";
export const routes = [
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path:"/",
    element:<PrivateRoute children={<Header/>} />
  }
];
