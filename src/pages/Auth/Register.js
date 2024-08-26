import { Alert, message } from 'antd';

import React, { useContext, useState  } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from '../../context/authContext';
import { doCreateUserWithEmailAndPassword } from '../../config/auth';

export default function Register() {

  const {userLoggedIn} = useAuth()
  const [state, setState] = useState({ fullName: "", email: "", password: "" });
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let { fullName, email, password } = state;
    fullName = fullName.trim();
    if (fullName.length < 3) { return message.error("Enter Your Full Name") };
    if (password.length < 8) { return message.error("Password must be of Eight Character") };
    email = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = regex.test(email);
    if(valid === false)return message.error("Enter The Right Email")
    const user = { fullName, email, password , todo : {image: "", productName: '', description: '', price: ''} }




    // let users = JSON.parse(localStorage.getItem('users')) || [];
    // let userExists = users.find(user => user.email === email);
    // if (userExists) {
    //   message.error("User Already Exists")
    // } else {
    //   users.push(formData)
    //   localStorage.setItem('users', JSON.stringify(users));
    //   message.success("You Are Registered Successfully")
    //   navigate("/")
    // }
  }
  return (
    <main className='auth py-5'>
              {userLoggedIn && (<Navigate to={'/'} replace={true}/>)}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className="text-primary text-center mb-4">Register</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <input type="text" className='form-control' placeholder='Enter full name' name='fullName' onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="email" className='form-control' placeholder='Enter email' name='email' onChange={handleChange} />
                  </div>
                  <div className="col-12 mb-4">
                    <input type="password" className='form-control' placeholder='Enter password' name='password' onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <button className='btn btn-primary w-100'>Register</button>
                    <p className='mb-0 mt-2'>Already have an account? <Link to="/auth/login">Login Now</Link></p>
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
