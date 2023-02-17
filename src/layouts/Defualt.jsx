import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useContextprovider } from "../Context/ContextProvider";
const Defualt = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, token } = useContextprovider()
  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
    <div>
      <aside>
        <Link to="/dashboard">dashboard</Link>
        <Link to="/user">dashboard</Link>
        <Link to="/dashboard">dashboard</Link>
      </aside>
      <Outlet />
    </div>
  );
}

export default Defualt