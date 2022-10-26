import React from 'react';

function Art(props) {
  return (
    <div>
      <img src={props.image} />
      <p><b>{props.name}</b></p>
      <p><em>{props.desc}</em></p>
    </div>
  );
}

export default Art;
