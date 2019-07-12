import React, { Component } from 'react';

class Vehicle extends Component {
    
    render() { 
        return ( 
                <div className="vehicles text-left">
                    {this.props.destinationProps.eligibleVehicles.map(vehicle => <span><input onChange={this.props.onChange} key={this.props.destinationProps.name} type="radio" name={this.props.destinationProps.name} value={vehicle.name}/><label className="m-2">{vehicle.name} ({vehicle.total_no})</label><br/></span>)}
                </div>
         );
    }
}
 
export default Vehicle;