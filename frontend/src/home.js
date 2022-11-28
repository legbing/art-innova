import React from "react";
import img4 from "./assets/artist1.jpg";
import img5 from "./assets/artist2.jpg";
import img6 from "./assets/artist3.jpg";
import GalleryAd from "./components/gallery-ad";
import Navbar from './components/navbar';
import axios from "axios";
import Art from './components/art';

class Home extends React.Component{
    constructor(props){
    super(props);
    this.state={
        artworks:[],
        events:[]
    };
    }
    componentDidMount(){
        axios.get(
            "http://localhost:8000/upload_art/"
        ).then((response)=>{
          //console.log(response.data)
          //console.log(response.status)
          const items = response.data;
   
          this.setState({artworks:items});
          console.log(this.state.artworks);
          console.log(items);
   
   
        }).catch((err)=>{
         console.log("Nooo")
       });
       axios.get(
        "http://localhost:8000/add_event/"
        ).then((response)=>{
        //console.log(response.data)
        //console.log(response.status)
        const gal_events = response.data;

        this.setState({events:gal_events});
        console.log(this.state.events);
        console.log(gal_events);


        }).catch((err)=>{
        console.log("Nooo")
    });
   
    }
    render(){
        return(
            <div style={{backgroundColor:"rgb(255,242,230)"}}>
            <Navbar/>
            <h1 style={{position:"relative",fontStyle:"italic"}}>Featured Paintings</h1><br/>
            <div style={{backgroundColor:"rgb(255,229,204)",paddingTop:"3%"}}>
                {this.state.artworks.map((item, index) =>

                <Art key={index} image={item.pic} name={item.title} desc = {item.author} type='home'/>
                )}
            </div><br/>
            <h1 style={{fontStyle:"italic"}}>Featured Gallery Events</h1><br/>
            <div style={{backgroundColor:"rgb(255,229,204)",paddingTop:"3%"}}>
            {this.state.events.map((item, index) =>

            <GalleryAd key={index} img={item.ad} name={item.exhibit}/>

            )}
            </div><br/>
            </div>
        )
    }
}
export default Home;
/*class Home extends React.Component{
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
}*/
