import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { useAuth } from '../../context/authContext'

export default function Navbar() {
    const {userLoggedIn} = useAuth()
    const navigate = useNavigate()
    const doSignOut = () => {
        return auth.signOut();
    }
    
    return (
        <header>
            <header>
                <nav className="navbar navbar-expand-lg bg-info navbar-dark">
                    <div className="container">
                   
                        <Link to="/" className="navbar-brand">Basic React</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Auth</button>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/auth/login" className="dropdown-item">Login</Link></li>
                                        <li><Link to="/auth/register" className="dropdown-item">Register</Link></li>
                                        <li><Link to="/auth/forgotpassword" className="dropdown-item">Forgot Password</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <div>
                            {
                    userLoggedIn
                    ?
                    <>
                                <button onClick={() => {doSignOut().then(() =>{navigate('/auth/login') }) }} className='text-sm btn btn-danger text-decoration-none'>Logout</button>
                    </>
                    :
                    <>
                     <button className='btn btn-light mx-1'> <Link className='text-sm  text-decoration-none' to={'/auth/login'}>Login</Link></button>
                      <button className='btn btn-light mx-1'><Link className='text-sm text-decoration-none' to={'/auth/register'}>Register New Account</Link></button>
                    </>
                  }
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </header>
    )
}
