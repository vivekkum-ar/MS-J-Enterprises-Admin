import './Layout.css'
import { Outlet, Link } from "react-router-dom";

function Layout() {

  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
