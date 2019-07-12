import React, { Component } from 'react';
import './destination.css';

class Destination extends Component {
    state = { 
        remPlanets:[],
        planets:[],
        planetOne:"--your choice--",
        planetTwo:"--your choice--",
        planetThree:"--your choice--",
        planetFour:"--your choice--"
     }
    selPlanets = {
        planetOne:false,
        planetTwo:false,
        planetThree:false,
        planetFour:false
    }
    componentDidMount(){
        fetch("https://findfalcone.herokuapp.com/planets")
            .then(res => res.json())
            .then((remPlanets) => {
                this.setState({remPlanets,planets:remPlanets});
            });
    }
    handleChange = (e) => {
        
        if(this.selPlanets[e.target.name]===false){

            this.setState({[e.target.name]:e.target.value});
            this.selPlanets[e.target.name]=true;
            var remPlanet = this.state.remPlanets.filter(planet => {
                return planet.name!==e.target.value ;
             });
             
            this.setState({remPlanets:remPlanet});
        }else{
            
            var prevPlanet = this.state[e.target.name];
            this.setState({[e.target.name]:e.target.value});
            var planetObj = this.state.planets.filter(planet => {
                return planet.name===prevPlanet ;
             });
            let _remPlanets= [...this.state.remPlanets]
            _remPlanets.push(planetObj[0]);
            var remPlanets = _remPlanets.filter(planet => {
                 return planet.name!==e.target.value ;
            });
            this.setState({remPlanets});
        }
       

    }
    render() { 
        return ( 
            <div className="container h-100 d-flex flex-column">
                <h1 className="text-center p-5">Select the planets you want to send vehicles to:</h1>
                <form id="main">
                <div className="row text-center">
                    
                    <div className="col"><h3>Planet One</h3>
                            <select onChange={this.handleChange} className="m-3" name="planetOne" value={this.state.planetOne}>
                                <option>{this.state.planetOne}</option>
                                {this.state.remPlanets.map(planet => <option key={planet.name} >{planet.name}</option>)}
                            </select>
                            <br/>
                            
                    </div>
                    
                    <div className="col"><h3>Planet Two</h3>
                            <select onChange={this.handleChange} className="m-3" name="planetTwo" value={this.state.planetTwo}>
                                <option>{this.state.planetTwo}</option>
                                {this.state.remPlanets.map(planet => <option key={planet.name} >{planet.name}</option>)}
                            </select>
                            <br/>
                    
                    </div>

                    <div className="col"><h3>Planet Three</h3>
                            <select onChange={this.handleChange} className="m-3" name="planetThree" value={this.state.planetThree}>
                                <option>{this.state.planetThree}</option>
                                {this.state.remPlanets.map(planet => <option key={planet.name} >{planet.name}</option>)}
                            </select>
                            <br/>
    
                    </div>

                    <div className="col"><h3>Planet Four</h3>
                            <select onChange={this.handleChange} className="m-3" name="planetFour" value={this.state.planetFour}>
                                <option>{this.state.planetFour}</option>
                                {this.state.remPlanets.map(planet => <option key={planet.name} >{planet.name}</option>)}
                            </select>
                            <br/>
                    
                    </div><br/><br/>
                    
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