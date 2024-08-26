import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Todo from './Todo'

export default function Index() {
  return (
    <>
      <Routes>
        <Route path='/*' element = {<Frontend/>}></Route>
        <Route path='auth/*' element = {<Auth/>}></Route>
        <Route path='todo/*' element = {<Todo/>}></Route>
      </Routes>
    </>
  )
}
