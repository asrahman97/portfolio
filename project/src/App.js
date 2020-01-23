import React from 'react';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Body from './components/body'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Hello World
      </header> */}

      <Header />
      <Body />
      <Footer />

      
    </div>

  );
}

export default App;
