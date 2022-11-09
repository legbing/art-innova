import React from 'react';
import Popup from 'reactjs-popup';
import './popup_style.css';

function Upload({isshow1}) {

  console.log(isshow1);
  return (
    <div className={`${!isshow1 ? "outer": ""} show`}>
    <div className="form">
    <div className="form-box solid">
      <form>
        <label>Title: </label><br/><br/>
        <input
        type="text"
        name="title" />
      </form>

      <label>Artist Name: </label><br/><br/>
      <input type="text" name="artist" />
      <label>Upload your work: </label><br/><br/>
      <input type="file" name="art" />
      <img id="myart" src="#" alt="My image" />
      <input type="submit"/>
    </div>
    </div>
    </div>
  )
}

export default Upload;
