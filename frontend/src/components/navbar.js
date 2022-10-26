import React from 'react';

class Navbar extends React.Component{
    render()
            {
                var headStyle = {
                    left: 0,
                    top: 0,
                    padding: 10,
                    display: 'flex'
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
                    width: '50%',
                    marginLeft: '45%'
                }
                var div1Style = {
                    display: 'flex',
                    width: '50%'

                }
                var hstyle = {
                    fontFamily: 'inter',
                    fontStyle: 'italic',
                    marginLeft: '20px'
                }
                return(
                    <header style={headStyle}>
                        <div style={div1Style}>

                            <h2 style={hstyle}>Art Innova</h2>
                        </div>

                        <div style={div2Style}>
                            <a href="/artist/paintings" style={linkStyle}>PAINTINGS</a>
                            <a href="/artist/drwaings" style={linkStyle}>DRAWINGS</a>
                            <a href="/artist/sculptures" style={linkStyle}>SCULPTURES</a>
                            <a href="/artist/galleries" style={linkStyle}>GALLERIES</a>
                        </div>
                    </header>
                );
            };
}

export default Navbar;
