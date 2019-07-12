import React, { Component } from 'react';
import './success.css';
import {Link, Redirect} from 'react-router-dom';

class Success extends Component {
    planetNames=[];
    vehicleNames=[];
    state={
    successMessage:'',
    planet:""
    };
    
    componentDidMount(){
        let destinations = this.props.location.state;
        if(destinations!==undefined){
        this.planetNames=destinations.map(a=>{
            return a.destination;
        })
        this.vehicleNames=destinations.map(a=>{
            return a.vehicle;
        })
        }
        this.getTokenAPI();
    }
    getTokenAPI=()=>{
        fetch("https://findfalcone.herokuapp.com/token",{
            method:'POST',
            headers:{
                'Accept':'application/json'
            },
            body:{}
        }).then(res => res.json())
        .then((data) => {
           this.findFalconeAPI(data.token,this.planetNames,this.vehicleNames);
        })
    }

    findFalconeAPI=(token,planetNames,vehicleNames)=>{
        this.setState({successMessage:"Please wait while we calculate.."})
        fetch("https://findfalcone.herokuapp.com/find",{
            method:'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "token":token,
                "planet_names": planetNames,
                "vehicle_names": vehicleNames
            })
        }).then(res=>res.json())
        .then((data)=>{
            if(data.status==="error" || data===undefined || this.props.location.fromGame!==true){
                this.setState({successMessage:"Please re-initialize the game!"});
                this.props.history.push('/');
            }else
                data.status==="false"?this.setState({successMessage:"Sorry! You could not find Falcone!"}):this.setState({successMessage:"Congrats! You found Falcone!", planet:data.planet_name})
        })
    }
    render() { 
        
        var planet=this.state.planet;
        return ( 
            <React.Fragment>
           
            
            <div className="container h-100 d-flex flex-column">
                <div id="main-success">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1 className="text-center p-5">{this.state.successMessage}</h1> 
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                    {(planet!==null || planet!==undefined)&&(planet.length>0)?<h2 className="m-2">Planet - <code>{planet}</code></h2>:null}
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                    {(planet!==null || planet!==undefined)&&(planet.length>0)?<h2 className="m-2">Time taken - <code>{planet}</code></h2>:null}
                    </div>
                </div>
                <div className="row justify-content-center">
                <Link to="/" >
                    <button className="btn btn-success">Go-Back!</button>
                </Link>
                </div>
                </div>
            </div>
            </React.Fragment>
        
        );
    }
}
 
export default Success;