import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {

  const { oktaAuth, authState } = useOktaAuth();

  if(!authState){
    return <SpinnerLoading/>
  }

  const handleLogout = async () => oktaAuth.signOut();

  console.log(authState);
  
  const { isAuthenticated, idToken } = authState;
  const userName = isAuthenticated && idToken?.claims?.name;
  

    return(
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
        <div className='container-fluid'>
          <span className='navbar-brand'>E-Library</span>
          <button className='navbar-toggler' type='button' 
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-expanded='false'
          aria-label='Toggle Navigation'>

            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to="/home" className='nav-link'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/search" className='nav-link'>Search Books</NavLink>
              </li>
              {authState.isAuthenticated && authState.accessToken?.claims?.userType !== 'admin' &&
              <li className='nav-item'>
                <NavLink className='nav-link' to="/shelf">Shelf</NavLink>
              </li>
              }
              {authState.isAuthenticated && authState.accessToken?.claims?.userType === 'admin' &&
              <li className='nav-item'>
               <NavLink className='nav-link' to='/admin'>Admin</NavLink>
              </li>
              }
              {authState.isAuthenticated && authState.accessToken?.claims?.userType !== 'admin' &&
              <li className='nav-item'>
                <NavLink className='nav-link' to="/fees">Pay Fees</NavLink>
              </li>
              }
            </ul>
            <ul className='navbar-nav ms-auto'>
            {!authState.isAuthenticated ? 
              <li className='nav-item m-1'>
                <Link type='button' className='btn btn-outline-light' to="/login">Sign in</Link>
              </li>
              :(
                <li className='nav-item d-flex align-items-center'>
              <span className='me-3 text-light dropdown' style={{cursor:'pointer'}}>
              <FontAwesomeIcon icon={faUser} className='me-2'/>
                {userName}
                <div className='dropdown-menu'>
                  <div className='dropdown-item' onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </span>
              </li>
              )
            }
            </ul>
          </div>
        </div>
      </nav>
    );
}