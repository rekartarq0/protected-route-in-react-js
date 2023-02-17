import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import Signup from "./components/Signup";
import Guest from "./layouts/Guest";
import Defualt from "./layouts/Defualt";
import Notfoundview from "./components/Notfoundview";
import Dasboard from "./components/Dasboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Defualt />,
    children: [
      {
        path: "/",
        element:<Navigate to="/user"/>
      },
      {
        path: "/dasboard",
        element: <Dasboard />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfoundview />,
  },
]);

export default router;
