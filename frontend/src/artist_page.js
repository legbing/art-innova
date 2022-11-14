import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Navbar from './components/navbar';
import Art from './components/art';
import "./artist_page.css"
import plus from './assets/plus_symbol.png'
import pic from './assets/monalisa.jpg';
import ad from './assets/art-exhib.png';
import GalleryAd from './components/gallery-ad';
import Upload from './components/popup';
import axios from 'axios';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
//import GetDeets from './components/deets';

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

  const location = useLocation()
  const navigate = useNavigate()
  const [currentuser, setCurrentuser] = useState('')
  //const user = location.state.user
  //localStorage.setItem('user', user)
  //const history = useHistory();
  //console.log("User: ", location.state.user);
  //setCurrentuser((currentuser)=>location.state.user);

  const [isshow1, setShow1, isshow2, setShow2] = React.useState(false);
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(0);
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

  useEffect(() => {
    setCurrentuser((currentuser)=>location.state.user);
    console.log("Cur user: ", currentuser);
   fetchItems(currentuser);
 }, [location]);

 const requestOptions = {
   method: "GET",
   headers: { "Content-Type": "application/json"},
 };

 const fetchItems = async (currentuser) => {

  axios.get(
      `http://localhost:8000/get_artist_art/${location.state.user}`

     ).then((response)=>{
       //console.log(response.data)
       //console.log(response.status)
       const items = response.data;

       setItems(items);
       console.log(items);
       setStatus(response.status);


     }).catch((err)=>{
      console.log("Nooo")
    })
  };

  if(status == 200) {
    const listArt = items.map((item, index) =>

        <Art key={index} image={item.pic} name={item.title} desc = {item.author} handlePopup2Open={handlePopup2Open} isshow2={isshow2}/>

    );
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


                  <div style={divpic} onClick={handlePopup2Open}>
                  {listArt}
                  <Art image={pic} name="Mona Lisa" desc = "Leonardo DaVinci" handlePopup2Open={handlePopup2Open} isshow2={isshow2}/></div>
                </div>
                <Upload isshow1={isshow1} user={location.state.user}/>
            </div>

            <div className='divStyle2'>
                <h1 className='heading-2'>Your upcoming displays</h1>
                <GalleryAd img={ad} />
            </div>
            </div>
        </div>
    );
  }
}

export default Artists;
