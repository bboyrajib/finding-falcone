import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron">
                <h1 className="greenText text-center">Finding Falcone</h1>
                <div className="text-center">
                    <span className="navbar-brand whiteText">a coding challenge by <code><a target="_blank" className="pinkText" rel="noopener noreferrer" href="https://www.geektrust.in">www.geektrust.in</a></code></span>
                </div>
            </div>
         );
    }
}
 
export default Header;