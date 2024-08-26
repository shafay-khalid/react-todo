import React from 'react'
import Header from '../../components/Header'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from '../../components/Footer'
import Registered from './Registered'

export default function Frontend() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='registered' element={<Registered/>}></Route>
        <Route path='*' element={<h1>No Page, Page Not Found, 404 Error</h1>} />
    </Routes>
    <Footer/>
      
    </>
  )
}
