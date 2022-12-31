import React from 'react'
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LayoutDefault() {
  return (
    <div className="wrap">
      <Header/>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
