import React from 'react';
import Upload from './popup';

function Art(props) {

  const handleClick = () => {
    props.handlePopup2Open()
  }
  var divpic = {
    display: 'inline-block',
    height: 50,
    paddingLeft: 50,
    justifyContent: 'center'
  }
  return (
    <div style={divpic}>
      <img src={props.image} onClick={handleClick} />
      <p><b>{props.name}</b></p>
      <p><em>{props.desc}</em></p>
      <Upload isshow2={props.isshow2} />
    </div>

  );
}

export default Art;
