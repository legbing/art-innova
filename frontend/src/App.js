import React from "react";
import{
    BrowserRouter as Router,
    Route,
    Routes
  }from "react-router-dom";
import Form from "./login_signup";
import Artists from "./artist_page";
import Artpiece from "./artwork";
import Gallery from "./gallery_page";

import Home from "./home";
class App extends React.Component{
    render(){
    return(
    <Router>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/artist/home" element={<Artists/>}></Route>
            <Route path="/art" element={<Artpiece/>}></Route>
            <Route path="/" element={<Form/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
        </Routes>
    </Router>

    )
}
};
export default App;
