import React, { useState } from 'react';
//import Popup from 'reactjs-popup';
import './popup_style.css';

function Upload({isshow1}) {

  console.log(isshow1);
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
      //<label style={{color:"white"}}>Remove Art: </label><br/>
      //<button onClick={removeimg}>remove</button><br/><br/>
  }

function removeimg(e){
  setFile();
  e.preventDefault();
}

  return (
    <div className={`${!isshow1 ? "outer": ""} show`}>
    <div className="form">
    <div className="form-box solid">
      <form style={{display:"flex",flexDirection:"row",boxSizing: "border-box"}}>
        <div>
        <label style={{color:"white"}}>Title: </label><br/>
        <input
        type="text"
        name="title" /><br/><br/>

      <label style={{color:"white"}}>Artist Name: </label><br/>
      <input type="text" name="artist" /><br/><br/>
      <label style={{color:"white"}}>Upload your work: </label><br/>
      <input type="file" name="art" onChange={handleChange} /><br/><br/>
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
