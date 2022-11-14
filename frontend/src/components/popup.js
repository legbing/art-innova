import React from 'react';
import Popup from 'reactjs-popup';
import './popup_style.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../assets/close.png';

function Upload({isshow1, user}) {

  //console.log(isshow1);
  const [file, setFile] = useState();
  const [file_disp, setFileDisp] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFileDisp(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      //<label style={{color:"white"}}>Remove Art: </label><br/>
      //<button onClick={removeimg}>remove</button><br/><br/>
  }

function removeimg(e){
  setFile();
  e.preventDefault();
}

  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState("")
  const navigate = useNavigate();
  //console.log(isshow1);
  const up_art = (e) =>{
    //const title=e.target.title.value;
    //const artist=e.target.artist.value;
    //const art = e.target.art.value;
    e.preventDefault();
    const formData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    formData.append("title", title);
    formData.append("author", artist);
    formData.append('pic', file);
    formData.append('description', description);
    formData.append('cost', cost);
    console.log(formData);
  axios.post(
      "http://localhost:8000/upload_art/",formData
     ).then((response)=>{
       console.log(response)
       alert('Art work uploaded successfully')
       navigate("/artist/home", {state:{user}})
     }).catch((err)=>{
      console.log("Nooo")
     })

  }

  return (
    <div className={`${!isshow1 ? "outer": ""} show`}>
    <div className="form">
    <div className="form-box solid">
      <form style={{display:"flex",flexDirection:"row",boxSizing: "border-box"}} onSubmit={up_art}>
        <div>
        <label style={{color:"white"}}>Title: </label><br/>
        <input
        type="text"
        onChange={e => setTitle(e.target.value)} /><br/><br/>

      <label style={{color:"white"}}>Artist Name: </label><br/>
      <input type="text" name="artist" onChange={e => setArtist(e.target.value)}/><br/><br/>
      <label style={{color:"white"}}>Enter a description: </label><br/>
      <textarea name="description" onChange={e => setDescription(e.target.value)}/><br/><br/>
      <label style={{color:"white"}}>Enter the price: </label><br/>
      <input name="cost" type="number" step="0.01" onChange={e => setCost(e.target.value)}/><br/><br/>
      <label style={{color:"white"}}>Upload your work: </label><br/>
      <input type="file" name="art" onChange={handleChange} filename={file}

      accept="image/*"></input>/><br/><br/>
      <input type="submit"  style={{width:"100px"}}/>
      </div>
      <div style={{width:"250px",height:"250px",backgroundColor:"white",display:"flex",justifyContent:"center"}}>
      <div ><img id="myart" src={file_disp}  width="100%" height="100%" alt="upload your artwork!" /></div><br/><br/>
      </div>
      </form>

    </div>
    </div>
    </div>
  )
}

export default Upload;
