import React from "react";
import Form from "./login_signup";
import{
    BrowserRouter as Router,
    Route,
    Routes
  }from "react-router-dom";
import Home from "./home";
class App extends React.Component{
    render(){
    return(
    <Router>
        <Routes>
            <Route  path="/home" element={<Home/>}></Route>
            <Route path="/" element={<Form/>}></Route>
        </Routes>
    </Router>
    
    )
    }
};
export default App;
