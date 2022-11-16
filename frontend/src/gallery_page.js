import React, { useState, useEffect } from 'react';
//import Modal from '@material-ui/core/Modal';
import Navbar from './components/navbar';
import Art from './components/art';
import "./gallery_page.css";
import plus from './assets/plus_symbol.png';
import pic from './assets/gallery1.jpeg';
import pic1  from './assets/gallery2.jpeg';
import GalleryAd from './components/gallery-ad';
//import ad from './assets/art-exhib.png';
//import GalleryAd from './components/gallery-ad';
import Upload2 from './components/popup1';
import axios from 'axios';
import {useNavigate, useLocation, useParams} from 'react-router-dom';

function Gallery() {

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
    paddingLeft: '50px',
    justifyContent: 'center'
  }

  const location = useLocation()
  console.log(location.state.user);
  const navigate = useNavigate()
  const [currentuser, setCurrentuser] = useState('')
  const [val,setVal]=React.useState('')

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
      if(location.state==null){
        alert("user is not logged in")
        navigate('/');
      }
      setCurrentuser((currentuser)=>location.state.user);
      console.log("Cur user: ", location.state.user);
     fetchItems(currentuser);
   }, [location]);

   const requestOptions = {
     method: "GET",
     headers: { "Content-Type": "application/json"},
   };

   const fetchItems = async (currentuser) => {

    axios.get(
        `http://localhost:8000/get_event/${location.state.user}`

       ).then((response)=>{
         //console.log(response.data)
         //console.log(response.status)
         const items = response.data;
         //console.log("helloo")
         setItems(items);
         console.log(items);
         setStatus(response.status);


       }).catch((err)=>{
        console.log("Nooo")
      })
    };

    if(status == 200) {
      const listArt = items.map((item, index) =>

          <GalleryAd key={index} img={item.ad} name={item.exhibit}/>

      );
    return (

        <div style={{backgroundColor:"rgb(255,242,230)"}} width="100%" height="100%" className="stylebody">

        <div className={!isshow1 ? "stylebody" : "overlay"}>
            <Navbar />
            <div style={divStyle}>
                <h1 className='heading-1'>Upcoming Events</h1>
                <div className='pics'>
                  <div className='rectangle' onClick={handlePopup1Open}>
                    <img src={plus} className = 'plus-img'/>

                  </div>
                  <div style={{paddingLeft:"150px"}}>
                  <div style={divpic}><GalleryAd img={pic} name="Avalanche Annual Art exhibit"/></div>
                  <div style={divpic}><GalleryAd img={pic1} name="Community Centre Art exhibit"/></div>
                  <div style={divpic}>{listArt}</div>
                  </div>
                </div>


               
            </div>
            

            </div>
            <Upload2 isshow1={isshow1} user={location.state.user}/>
        </div>

    );
  }
}

export default Gallery;