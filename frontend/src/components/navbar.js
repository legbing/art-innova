import React from 'react';

class Navbar extends React.Component{
    render()
            {
                var headStyle = {
                    left: 0,
                    top: 0,
                    padding: 10,
                    display: 'flex',
                    boxSizing: 'border-box'
                };
                var linkStyle = {
                    margin: 10,
                    fontSize: 10,
                    textDecoration: 'none'
                };
                var buttonStyle = {
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "blue",
                    cursor: "pointer"
                };
                var div2Style = {
                    display: 'inline-block',

                    marginLeft: 'auto',
                    paddingTop: 20
                }
                var div1Style = {
                    display: 'flex',
                    
                }
                var hstyle = {
                    fontFamily: 'comicsans',
                    fontStyle: 'italic',
                    marginLeft: '20px',
                    fontSize: '30px'
                }
                return(
                    <header style={headStyle}>
                        <div style={div1Style}>

                            <p style={hstyle}>Art Innova</p>
                        </div>

                        <div style={div2Style}>
                            <a href="/home" style={linkStyle}>PAINTINGS</a>
                            <a href="/home" style={linkStyle}>DRAWINGS</a>
                            <a href="/home" style={linkStyle}>SCULPTURES</a>
                            <a href='/' style={linkStyle}>logout</a>
                        </div>
                    </header>
                );
            };
}

export default Navbar;
