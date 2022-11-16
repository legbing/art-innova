import React from "react";
import {useLocation} from 'react-router-dom';
function Artpiece(){
    let location=useLocation();
    //console.log(location.state.items);rgb(255,229,204)rgb(239,227,227)
    return(
        <div>
            <div style={{position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"rgb(255,229,204)"}}>
            <div style={{width:"60%",height:"100%",backgroundColor:"rgb(255,242,230)",boxShadow: "2px 10px 10px 10px rgba(189, 196, 196, 0.892)",position:"relative",left:"20%",justifyContent:"center",textAlign:"center"}}>
            <h1 >{location.state.items.title}</h1><br/>
            <img src={location.state.items.pic} width="80%" height="60%" style={{border: "2px solid black",borderRadius: "4px",backgroundColor:"white",padding: "10px",boxShadow: "10px 10px 10px 1px rgba(38, 35, 35, 0.892)"}}></img><br/>
            <h4>Artist: {location.state.items.author}</h4>
            <h3 style={{fontSize:"large",fontStyle:"italic"}}>{location.state.items.description}</h3>
            </div>
            </div>
            </div>

    )
}
export default Artpiece;