import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'


export default function Home() {

const {currentUser} = useAuth();
console.log(currentUser)
const welcome = 'Heloo You Are Logged In.'

  const navigate = useNavigate()
  const handleRegistered = e => {
    e.preventDefault()
    navigate('/registered')
  }
  const handleTodos = e => {
    e.preventDefault();
    navigate('todo/todos')
  }
  return (
    <main className='auth py-5'>
      <div className="">
        <container>
          <div className="row col">
            <h2 className='text-white'>{currentUser ?welcome:""}</h2>
          </div>
        </container>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="card border-none mx-auto p-3 p-md-4" onClick={handleRegistered} style={{ maxWidth: 200, cursor: 'pointer' }}><b className='text-center' style={{ cursor: 'pointer' }}>Registered Users</b></div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="card border-none mx-auto p-3 p-md-4" onClick={handleTodos} style={{ maxWidth: 200, cursor: 'pointer' }}><b className='text-center'>TODOS Form  </b></div>
          </div>
        </div>
      </div>
    </main>
  )
}
