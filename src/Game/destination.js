import React, { Component } from 'react';
import './destination.css';

class Destination extends Component {
    state = { 
        planets:[]
     }

    componentDidMount(){
        
    }

    render() { 
        return ( 
            <div className="container h-100 d-flex flex-column">
                <h1 className="text-center p-5">Select the planets you want to send vehicles to:</h1>
                <form id="main">
                <div className="row text-center">
                    
                    <div className="col"><h3>Planet One</h3>
                            <select className="m-3">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <br/>
                            <input type="radio" name="vehicleOne" value="1" className="m-2"/><label>One</label><br/>
                            <input type="radio" name="vehicleOne" value="2" className="m-2"/><label>One</label><br/>
                            <input type="radio" name="vehicleOne" value="3" className="m-2"/><label>One</label><br/>
                            <input type="radio" name="vehicleOne" value="4" className="m-2"/><label>One</label>
                    </div>
                    
                    <div className="col"><h3>Planet Two</h3>
                    
                    
                    </div>

                    <div className="col"><h3>Planet Three</h3></div>

                    <div className="col"><h3>Planet Four</h3></div><br/><br/>
                    
                </div>
                <div className="row justify-content-center">
                <button type="submit" className="btn btn-success col-xl-2">Find Falcone!</button>
                </div>
                </form>
             </div>     
         );
    }
}
 
export default Destination;