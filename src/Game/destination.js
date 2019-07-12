import React, { Component } from 'react';
import './destination.css';

class Destination extends Component {
    render() {  
        return ( 
                    <div><h3>Planet {this.props.id}</h3>
                            <select onChange={this.props.onChange} className="m-3" name={this.props.name} value={this.props.destinationProps.destination}>
                                <option>{this.props.destinationProps.destination}</option>
                                {this.props.planets.map(planet => <option key={planet.name} >{planet.name}</option>)}
                            </select>
                            <br/>   
                    </div>  
         );
    }
}
 
export default Destination;