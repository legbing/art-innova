import React from 'react';

function GalleryAd(props) {
  var adStyle = {
    borderRadius: 10
  }
  var imgStyle = {

    maxWidth:'250px',
  maxHeight:'400px',
  width: 'auto',
  height: 'auto',
  borderRadius: '10px'
  }
  return (
      <div style = {adStyle}>
        <img src={props.img} style={imgStyle} />
      </div>
  )
}

export default GalleryAd;
