import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/artist1.jpg";
import img5 from "./assets/artist2.jpg";
import img6 from "./assets/artist3.jpg";
import Navbar from './components/navbar';
class Home extends React.Component{
    render(){
        return(
            <div>
            <Navbar/>
            <h1 style={{position:"absolute"}}>Featured Paintings</h1><br/>
            <div style={{display:"flex",flexDirection:"row",padding:"4%"}}>
                <img src={img1} style={{width:"31%"}} alt="img1" />&emsp;&emsp;
                <img src={img2} style={{width:"31%"}} alt="img2" />&emsp;&emsp;
                <img src={img3} style={{width:"31%"}} alt="img3" />
            </div><br/>
            <h1>Featured Artists</h1>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"rgb(255,229,204)",padding:"5%"}}>
                <div style={{width:"30%",display:"flex",flexDirection:"row"}}>
                    <img src={img6} style={{width:"50%"}} alt="artist1"></img>
                    <div style={{width:"50%",backgroundColor:"white"}}>
                        Name: Caroline<br/>
                        Place: Paris
                    </div>
                </div>&emsp;&emsp;
                <div style={{width:"30%",display:"flex",flexDirection:"row"}}>
                    <img src={img5} style={{width:"50%"}} alt="artist1"></img>
                    <div style={{width:"50%",backgroundColor:"white"}}>
                        Name: Chandler<br/>
                        Place: USA
                    </div>
                </div>&emsp;&emsp;
                <div style={{width:"30%",display:"flex",flexDirection:"row"}}>
                    <img src={img4} style={{width:"50%"}} alt="artist1"></img>
                    <div style={{width:"50%",backgroundColor:"white"}}>
                        Name: Ratchanok<br/>
                        Place: South Africa
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Home;
