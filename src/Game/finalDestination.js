import React, { Component } from 'react';
import Destination from './destination';
import './destination.css';
import Vehicle from './vehicle'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

class FinalDestination extends Component {
    state = { 
       planets:[],
       destinations: [
           {id:"One",name:"planetOne",destination:"----",vehicle:"",timeTaken:"",isSelected:false,eligibleVehicles:[]},
           {id:"Two",name:"planetTwo",destination:"----",vehicle:"",timeTaken:"",isSelected:false,eligibleVehicles:[]},
           {id:"Three",name:"planetThree",destination:"----",vehicle:"",timeTaken:"",isSelected:false,eligibleVehicles:[]},
           {id:"Four",name:"planetFour",destination:"----",vehicle:"",timeTaken:"",isSelected:false,eligibleVehicles:[]}
       ],
       vehicles:[],
       disabled:true
    }

    originalPlanetList=[];


    callPlanetsAPI=()=>{
        fetch("https://findfalcone.herokuapp.com/planets")
            .then(res => res.json())
            .then((planets) => {
                this.setState({planets});
                this.originalPlanetList.push(planets);
            });
        
    }


    callVehiclesAPI=()=>{
        fetch("https://findfalcone.herokuapp.com/vehicles")
            .then(res => res.json())
            .then((vehicles) => {
                this.setState({vehicles});
            });
    }

    
    componentDidMount(){
        this.callPlanetsAPI();
        this.callVehiclesAPI();
    }


    handleChange = (e) => {
        var isSelected = this.state.destinations.filter(destination=>{
            return e.target.name===destination.name;
        });
        
        if(isSelected[0].isSelected===false){

            
            var remPlanet = this.state.planets.filter(planet => {
                  return planet.name!==e.target.value ;
            });
             
            this.setState({planets:remPlanet});
          }
         else{
            var _prevPlanet = isSelected[0];
             
            var prevPlanet = this.originalPlanetList[0].filter(planet=> planet.name===_prevPlanet.destination);
            
             let _remPlanets= [...this.state.planets];
             _remPlanets.push(prevPlanet[0]);
             var remPlanets = _remPlanets.filter(planet => {
                  return planet.name!==e.target.value ;
             });
             this.setState({planets:remPlanets});
         }
         var destinations=[...this.state.destinations];
         destinations.map(d=> {
             if(d.name===e.target.name){
                 d.isSelected=true;
                 d.destination=e.target.value;
             }
             return '';
         });
         this.setState({destinations});

        let planet = this.state.planets.filter(planet => {
            return planet.name===e.target.value;
        });
         this.handleVehicles(planet, e);

    }

    handleVehicles = (planet, e) => {
        let eligibleVehicles = this.state.vehicles.filter(vehicle=>{
            return vehicle.max_distance>=planet[0].distance;
        });
        var destinations=[...this.state.destinations];
         destinations.map(d=> {
             if(d.name===e.target.name){
                 d.eligibleVehicles = eligibleVehicles;
             }
             return '';
         });
         this.setState({destinations});
    }

    handleReset = () => {
        this.setState({planets:[],
            destinations: [
                {id:"One",name:"planetOne",destination:"----",vehicle:"",timeTaken:"",isSelected:false},
                {id:"Two",name:"planetTwo",destination:"----",vehicle:"",timeTaken:"",isSelected:false},
                {id:"Three",name:"planetThree",destination:"----",vehicle:"",timeTaken:"",isSelected:false},
                {id:"Four",name:"planetFour",destination:"----",vehicle:"",timeTaken:"",isSelected:false}
            ],
            vehicles:[]});
        this.callPlanetsAPI();
        this.callVehiclesAPI();
    }

    handleVehicleChange = (e) => {
        var destinations=[...this.state.destinations];
         destinations.map(d=> {
             if(d.name===e.target.name){
                 d.vehicle = e.target.value;
             }
             return '';
         });
         this.setState({destinations});
         this.changeButtonState();
    }

    changeButtonState =() => {
       var disabled = this.state.destinations.every(a=>{
            return a.vehicle.length>0;
        })
        this.setState({disabled:!disabled});
    }

    
    render() { 
        
        return ( 
            <React.Fragment>
            <button id="reset" className="btn btn-danger float-right" onClick={this.handleReset} type="submit">Reset</button>
                 <div className="container h-100 d-flex flex-column">
                        <h1 className="text-center p-5">Select the planets you want to send vehicles to:</h1>
                        <div id="main">
                            <div className="row text-center">
                                {this.state.destinations.map(destination => 
                                <div className="col">
                                    <Destination planets={this.state.planets} onChange={this.handleChange} destinationProps={destination} name={destination.name} key={destination.id} id={destination.id} />
                                        {destination.isSelected?<Vehicle onChange={this.handleVehicleChange} destinationProps={destination}/>:null}
                                </div>
                                        )}
                
                
                <br/><br/>
                    
                </div>
                    <div className="row justify-content-center">
                        <Link to={{pathname:"/success",state:this.state.destinations,fromGame:true}} >
                            <button disabled={this.state.disabled} className="btn btn-success">Find Falcone!</button>
                        </Link>
                    </div>
                </div>
             </div>   
             </React.Fragment> 
         );
    }
}
 
export default FinalDestination;