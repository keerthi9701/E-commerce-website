import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { messageService } from '../Components/Home/messageService';

 import React from 'react'
import '../Components/navbar.css'
function Navbar() {
  const navigate = useNavigate();
 // const navigatetocart = () => {
  //  navigate('/cart')
  //}
  const [isUserLoggedIn, SetIsUserLoggedIn] = useState(false);
  useEffect(() => {
      if (localStorage.getItem('userinfo')) {
          SetIsUserLoggedIn(true);
      }
      messageService.getMessage().subscribe(isLoggedIn => {
          SetIsUserLoggedIn(isLoggedIn);
      });
  }, []);
  const logout = () => {
      localStorage.clear();
      navigate('/Login');
      SetIsUserLoggedIn(false);
  };
                                                                                                                       
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="nav container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/products'>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to='/cart'>cart</Link>
            </li>
          </ul>
          
        </div>
        <div className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to='/Register'>Register</Link>
            </li>
            <li className="nav-item">
            {isUserLoggedIn ? (
                            <>
                                <li className="nav-item user">
                                    <div className="nav-link cursor-pointer" onClick={logout}><i class="fa-solid fa-user"></i>Logout</div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item user">
                                    <Link className="nav-link" to='/login'><i class="fa-solid fa-user"></i>Login In</Link>
                                </li>
                            </>
                        )
                        }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;