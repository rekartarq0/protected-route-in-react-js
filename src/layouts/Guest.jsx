import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContextprovider } from "../Context/ContextProvider";

const Guest = () => {
  const { token } = useContextprovider();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Guest;
