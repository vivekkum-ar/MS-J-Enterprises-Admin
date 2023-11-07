// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './pages/Layout.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
//@ts-ignore
import BillPage from './pages/Billpage';
import { FormDataProvider } from './FormDataProvider';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormDataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="bill" element={<BillPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </FormDataProvider>
  </React.StrictMode>,
)
