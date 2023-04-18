import React from 'react';

import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
    </div>
  );
}

export default App;
