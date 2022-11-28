import React from 'react';
//import Popup from 'reactjs-popup';
import './popup_style.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Upload2({isshow1, user}) {

  const [exhibit, setExhibit] = useState("")
  const [gallery, setGallery] = useState("")
  const [theme, setTheme] = useState("")
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("")
  const [file, setFile] = useState();
  const [file_disp, setFileDisp] = useState();
  const navigate = useNavigate();

  function handleChange(e) {
      console.log(e.target.files);
      setFileDisp(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      //<label style={{color:"white"}}>Remove Art: </label><br/>
      //<button onClick={removeimg}>remove</button><br/><br/>
  }

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);
  const addInput = (e) => {
    e.preventDefault();
    setArr(s => {
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const artistChange = e => {
    e.preventDefault();

    const index = e.target.id;
    let newArr = [...arr];
    newArr[index] = e.target.value;
    setArr(newArr);
    //setArr(s => {
      //const newArr = s.slice();
      //newArr[index].value = e.target.value;

      //return newArr;
    //});
  };

  const add_gallery = (e) =>{
    //const title=e.target.title.value;
    //const artist=e.target.artist.value;
    //const art = e.target.art.value;
    e.preventDefault();
    const formData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    formData.append('exhibit', exhibit);
    formData.append('gallery', gallery);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('theme', theme);
    formData.append('artists', arr);
    formData.append('ad', file);
    console.log(formData);
  axios.post(
      "http://localhost:8000/add_event/",formData
     ).then((response)=>{
       console.log(response)
       alert('Gallery event uploaded successfully')
       navigate("/gallery", {state:{user}})
     }).catch((err)=>{
      console.log("Nooo")
     })

  }

  return (
    <div className={`${!isshow1 ? "outer": ""} show`}>
    <div className="form">
    <div className="form-box solid">
      <form style={{display:"flex",flexDirection:"row",boxSizing: "border-box"}} onSubmit={add_gallery}>
      <div>
        <label style={{color:"white"}}>Art exhibition name: </label><br/>
        <input
        type="text"
        name="exhibit" onChange={e => setExhibit(e.target.value)}/><br />

        <label style={{color:"white"}}>Artist: </label><br/>
        <button onClick={addInput}>+</button>
        {arr.map((item, i) => (
          <input type="text" onChange={artistChange} value = {item.value} key={i}
          id={i} name="artist" />
        ))}

      <br></br><label style={{color:"white"}}>Gallery name: </label><br/>
      <input type="text" name="name" onChange={e => setGallery(e.target.value)}/><br></br>
      <br></br><label style={{color:"white"}}>Gallery theme: </label><br/>
      <input type="text" name="theme" onChange={e => setTheme(e.target.value)}/><br></br>
      <br></br><label style={{color:"white"}}>Date of event: </label><br/>
      <input type="date" name="date" onChange={e => setDate(e.target.value)}/><br></br>
      <br></br><label style={{color:"white"}}>Time of event: </label><br/>
      <input type="time" name="time" onChange={e => setTime(e.target.value)}/><br></br>

      <br></br><label style={{color:"white"}}>Upload the poster: </label>
      <input type="file" name="art" onChange={handleChange} filename={file}

      accept="image/*"></input><br/><br/>
      <input type="submit"  style={{width:"100px"}}/>
      </div>
      <div style={{width:"250px",height:"250px",backgroundColor:"white",display:"flex",justifyContent:"center"}}>
      <div ><img id="myart" src={file_disp}  width="100%" height="100%" alt="upload your poster!" /></div><br/><br/>
      </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Upload2;