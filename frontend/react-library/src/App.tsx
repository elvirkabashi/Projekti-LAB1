import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { HomePage } from './layouts/HomePage/HomePage';
import { Redirect, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home'/>
          </Route>
          <Route path='/home'>
            <HomePage/>
          </Route>
          <Route path='/search'>
            <SearchBooksPage/>
          </Route>
        </Switch>
        </div>
      <Footer/>
      
    </div>
  );
}

export default App;
