import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
      <Footer/>
      <SearchBooksPage/>
    </div>
  );
}

export default App;
