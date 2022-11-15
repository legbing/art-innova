import React, { useState, useEffect } from 'react';
//import Modal from '@material-ui/core/Modal';
import Navbar from './components/navbar';
import Art from './components/art';
import "./gallery_page.css"
import plus from './assets/plus_symbol.png'
import pic from './assets/gallery1.jpeg';
import pic1  from './assets/gallery2.jpeg';
import GalleryAd from './components/gallery-ad';
//import ad from './assets/art-exhib.png';
//import GalleryAd from './components/gallery-ad';
import Upload from './components/popup1';
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
    paddingLeft: 50,
    justifyContent: 'center'
  }

  const location = useLocation()
  console.log(location.state.user);
  const navigate = useNavigate()
  const [currentuser, setCurrentuser] = useState('')
  const [val,setVal]=React.useState('')
  const data=[
    "Artist name",
    "gallery theme",
    ]
    const [val1,setVal1]=React.useState('')
  const data1=[
    "0-5km",
    "5-10km",
    "11-15km",
    "16-20km",
    ">21 km"
    ]

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

        <div className="stylebody">

        <div className={!isshow1 ? "stylebody" : "overlay"}>
            <Navbar />
            <div className="search">
            <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search" />
            <datalist id="data">
                {/* <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option> */}
                {data.map((op)=><option>{op}</option>)}
            </datalist>


            <h5>{val}</h5>
        </div>
        <div className="distance">
            <input list="data1" onChange={(e)=>setVal1(e.target.value)} placeholder="Choose distance range" />
            <datalist id="data1">
                {/* <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option> */}
                {data1.map((op)=><option>{op}</option>)}
            </datalist>

            <h5>{val1}</h5>
        </div>
            <div style={divStyle}>
                <h1 className='heading-1'>Upcoming Events</h1>
                <div className='pics'>
                  <div className='rectangle' onClick={handlePopup1Open}>
                    <img src={plus} className = 'plus-img'/>

                  </div>

                  <div style={divpic}><GalleryAd img={pic} name="Avalanche Annual Art exhibit"/></div>
                  <div style={divpic}><GalleryAd img={pic1} name="Community Centre Art exhibit"/></div>
                  <div style={divpic}>{listArt}</div>
                </div>


                <Upload isshow1={isshow1} user={location.state.user}/>
            </div>


            </div>
        </div>

    );
  }
}

export default Gallery;
