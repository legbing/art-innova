import React from 'react';
import Popup from 'reactjs-popup';
import './popup_style.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload({isshow1}) {

  console.log(isshow1);
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      //setFile(URL.createObjectURL(e.target.files[0]));
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
  const navigate = useNavigate();
  //console.log(isshow1);
  const up_art = (e) =>{
    //const title=e.target.title.value;
    //const artist=e.target.artist.value;
    //const art = e.target.art.value;
    const formData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    formData.append("title", title);
    formData.append("author", artist);
    formData.append('pic', file);
    console.log(formData);
  axios.post(
      "http://localhost:8000/upload_art/",formData
     ).then((response)=>{
       console.log(response)
       alert('Art work uploaded successfully')
       navigate("/artist/home")
     }).catch((err)=>{
      console.log("Nooo")
     })
    e.preventDefault();
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
      <label style={{color:"white"}}>Upload your work: </label><br/>
      <input type="file" name="art" onChange={handleChange} filename={file}

      accept="image/*"></input>/><br/><br/>
      <input type="submit"  style={{width:"100px"}}/>
      </div>
      <div style={{width:"250px",height:"250px",backgroundColor:"white",display:"flex",justifyContent:"center"}}>
      <div ><img id="myart" src={file}  width="100%" height="100%" alt="upload your artwork!" /></div><br/><br/>
      </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Upload;
