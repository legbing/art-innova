import React from 'react';
import Navbar from './components/navbar';
import "./artist_page.css"
import plus from './assets/plus_symbol.png'

function Artists() {
  var divStyle = {
    position: 'relative',
    left: 10,
    top: 0,
    padding: 20,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column'
  }
    return (

        <div>
            <Navbar />
            <div style={divStyle}>
                <h1 className='heading-1'>Your Art Works</h1>
                <div className='rectangle'>
                  <img src={plus} className = 'plus-img'/>
                </div>
            </div>
        </div>
    )
}

export default Artists;
