import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="navbar-fixed-bottom footer-bg">
                <div className="footer-copyright text-center py-3">© GeekTrust 2019 &nbsp;
                    <a target="_blank" className="text-white" rel="noopener noreferrer" href="https://www.geektrust.in/coding-problem/frontend/space"> Finding Falcone</a>
                </div>
            </footer>

         );
    }
}
 
export default Footer;