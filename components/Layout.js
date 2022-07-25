import React from "react"
import NavBar from "./nav"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
