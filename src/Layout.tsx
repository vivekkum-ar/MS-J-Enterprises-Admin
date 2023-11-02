import { useEffect, useState } from 'react';
import './Layout.css'
import { Outlet } from "react-router-dom";

function Layout() {
useEffect(() => {
  document.documentElement.classList.add("light");
  }
, []);

  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
