import { message } from 'antd'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

export default function Login() {
  const {userLoggedIn} = useAuth()


  const [state, setState] = useState({ email: "", password: "" })
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    let { email, password } = state
    email = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = regex.test(email);
    if (valid === false) return message.error("Enter The Right Email")
      
   
    
    // let users = JSON.parse(localStorage.getItem('users')) || []
    // let userExist = users.find(user => user.email === email && user.password === password)
    // if (userExist) {
    //   message.success("You Are Successfully LogIn")
    //   navigate("/")
    // } else {
    //   message.error("User Not Found")
    // }


  }
  return (
    <main className='auth py-5'>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              {userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
              <h2 className='text-primary text-center mb-4'>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input type="email" className='form-control' onChange={handleChange} placeholder='Enter Email' name='email' />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="password" className='form-control' onChange={handleChange} placeholder='Enter password' name='password' />
                  </div>
                  <div className="col-12">
                    <button className='btn btn-primary w-100'>Login</button>
                    <p className='mb-0 mt-2'>Dont have an Account <Link to='/auth/register'>Register Now</Link>
                    </p>
                    <p className='mb-0 mt-1'><Link to='/auth/forgotpassword'>Forgot Password</Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
