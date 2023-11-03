import { useEffect } from 'react';
import './Layout.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

function Layout() {
useEffect(() => {
  document.documentElement.classList.add("light");
  }
, []);

  return (
    <>
    <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
