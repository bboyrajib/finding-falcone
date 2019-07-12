import React, { Component } from 'react';

class Vehicle extends Component {
    
    render() { 
        
        return ( 
                <div className="vehicles text-left">
                    {this.props.destinationProps.eligibleVehicles.map(vehicle => <span><input disabled={this.props.vehicleCount.filter(a=>{return a.name===vehicle.name})[0].total_no===0?true:false} onChange={this.props.onChange} key={this.props.destinationProps.name} checked={this.props.destinationProps.vehicle.length===0?false:null} type="radio" name={this.props.destinationProps.name} value={vehicle.name} />
                    <label className="m-2">{vehicle.name} ({this.props.vehicleCount.filter(a=>{return a.name===vehicle.name})[0].total_no})</label><br/></span>)}
                </div>
         );
    }
}
 
export default Vehicle;