
import axios from 'axios';
import React,{useEffect} from 'react';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import { useState } from 'react';

//import Upload from './popup';


function Art({image,name,desc,type,user}) {
  //const location = useLocation();
  const [disp, setdisp] = useState('none');
  const navigate = useNavigate();
  useEffect(() => {
    if(type=='artist')
    {
      console.log('artist');
      setdisp('block');
    }
    else
    {
      console.log('home');
      setdisp('none');
    }
    
 });
/*  const Check=() =>{
    if(props.type=='artist')
    {
      console.log('artist');
      setdisp('block');
    }
    else
    {
      console.log('home');
      setdisp('none');
    }*/
    //<label style={{color:"white"}}>Remove Art: </label><br/>
    //<button onClick={removeimg}>remove</button><br/><br/>
    const deleteart = (e) => {
      
      //confirm(true);
      if(window.confirm("do you really want to delete the art??")==true)
      {
      e.preventDefault();
      axios.delete(
        `http://localhost:8000/delete_art/${desc}/${name}`
    
       ).then((response)=>{
         //console.log(response)
         console.log(response.status)
         alert('art deleted!')
         e.preventDefault();
         console.log("hello")
         console.log(user)
          navigate("/artist/home",{state:{user}});
    
       }).catch((err)=>{
        console.log("Nooo")
      })
      e.preventDefault();
    }
    }
      
  const handleClick = () => {
    
    axios.get(
      `http://localhost:8000/get_artwork_desc/${desc}/${name}`
  
     ).then((response)=>{
       //console.log(response.data)
       //console.log(response.status)
       const items = (response.data)[0];
       //console.log(items)
       navigate("/art",{state:{items}})
  
  
     }).catch((err)=>{
      console.log("Nooo")
    })
  };
  
  
  var divpic = {
    display: 'inline-block',
    height: '140px',
    paddingLeft: '150px',
    paddingBottom:"100px",
    justifyContent: 'center'
  }
  return (
    <div  style={divpic}>
      <img className='art' src={image} width='100%' height='100%' onClick={handleClick} />
      <p style={{position:"relative",top:"0",display:disp,margin:"auto"}}><button style={{width:"100%",fontSize:"25px"}} onClick={deleteart}>-</button></p>
      <p><b>{name}</b></p>
      <p><em>{desc}</em></p>
    </div>

  );
}

export default Art;
