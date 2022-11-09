import React from 'react';
import Modal from '@material-ui/core/Modal';
import Navbar from './components/navbar';
import Art from './components/art';
import "./artist_page.css"
import plus from './assets/plus_symbol.png'
import pic from './assets/monalisa.jpg';
import ad from './assets/art-exhib.png';
import GalleryAd from './components/gallery-ad';
import Upload from './components/popup';

function Artists() {
  var divStyle = {
    position: 'relative',
    left: 10,
    top: 0,


    display: 'flex',
    flexDirection: 'column'
  }
  var divpic = {
    display: 'inline-block',
    height: 50,
    paddingLeft: 50,
    justifyContent: 'center'
  }



  const [isshow1, setShow1, isshow2, setShow2] = React.useState(false);
  const handlePopup1Open = () => {
    setShow1((isshow1) => !isshow1)
  }

  //const [isshow2, setShow2] = React.useState(false);
  const handlePopup2Open = () => {
    setShow2((isshow2) => !isshow2)
  }

  const handleClick = () => {
    handlePopup1Open()
  }

    return (
        <div className="stylebody">
        <div className={!isshow1 ? "stylebody" : "overlay"}>
            <Navbar />
            <div style={divStyle}>
                <h1 className='heading-1'>Your Art Works</h1>
                <div className='pics'>
                  <div className='rectangle' onClick={handlePopup1Open}>
                    <img src={plus} className = 'plus-img'/>

                  </div>

                  <div style={divpic}><Art image={pic} name="Mona Lisa" desc = "Leonardo DaVinci" handlePopup2Open={handlePopup2Open} isshow2={isshow2}/></div>
                </div>
                <Upload isshow1={isshow1}/>
            </div>

            <div className='divStyle2'>
                <h1 className='heading-2'>Your upcoming displays</h1>
                <GalleryAd img={ad} />
            </div>
            </div>
        </div>
    );
}

export default Artists;
