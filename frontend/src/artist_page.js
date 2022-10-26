import React from 'react';
import Navbar from './components/navbar';
import Art from './components/art';
import "./artist_page.css"
import plus from './assets/plus_symbol.png'
import pic from './assets/monalisa.jpg';

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
  var divpic = {
    display: 'inline-block',
    height: 50,
    paddingLeft: 50,
    justifyContent: 'center'
  }
    return (

        <div>
            <Navbar />
            <div style={divStyle}>
                <h1 className='heading-1'>Your Art Works</h1>
                <div className='pics'>
                  <div className='rectangle'>
                    <a href="/upload"><img src={plus} className = 'plus-img'/></a>
                  </div>

                  <div style={divpic}><Art image={pic} name="Mona Lisa" desc = "Leonardo DaVinci" /></div>
                </div>
            </div>
        </div>
    );
}

export default Artists;
