import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContextprovider } from "../Context/ContextProvider";
const Defualt = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, token } = useContextprovider()
  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Defualt