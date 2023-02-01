import React from 'react';
import logo from './logo.svg';
import './App.css';
import icon from './icon-music.svg';
import ilustration from './illustration-hero.svg';

function App() {


  return (
    <div className="App">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs,
           audiobooks, and podcasts on any 
           device anywhere you like!
        </p>
        <div className='annual'>
          <img className='icon' src={icon} alt="" />
          <h4 className='plan'>Annual Plan</h4>
          <h4 className='year'>$59.99/year</h4>
          <h4 className='change'>Change</h4>
        </div>
        <div>
          <button className='proceed'>Proceed to Payment</button>
          <br />
          <h3 className="cancel">Cancel Order</h3>
        </div>
    </div>
  );
}

export default App;
