import React, { Component } from 'react';
import './success.css';
import {Link} from 'react-router-dom';

class Success extends Component {
    
    planetNames=[];
    vehicleNames=[];
    state={
    isConnected:true,
    loading:true,
    successMessage:'',
    planet:"",
    totalTime:""
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
        this.setState({totalTime: this.props.location.totalTime})
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
        }).catch(e=>{
            this.setState({isConnected:false});
            setTimeout(this.getTokenAPI,5000);
        });
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
            this.setState({loading:false,isConnected:true});
            if(data.status==="error" || data===undefined || this.props.location.fromGame!==true){
                this.setState({successMessage:"Please re-initialize the game!"});
                this.props.history.push('/');
            }else
                data.status==="false"?this.setState({successMessage:"Sorry! You could not find Falcone!"}):this.setState({successMessage:"Congrats! You found Falcone! King Shan is pleased!", planet:data.planet_name})
        }).catch(e=>{
            setTimeout(this.findFalconeAPI,5000);
        });
    }
    render() { 
        
        var planet=this.state.planet;
        return ( 
            <React.Fragment>
           
            
            <div className="container h-100 d-flex flex-column">
                <div id="main-success">
                <div className="row text-center">
                    <div className="col-md-12">
                    
                    {this.state.loading && <i className="fa fa-refresh fa-spin"></i>}{!this.state.isConnected?<span>&nbsp;&nbsp;&nbsp;Please wait while we try to connect...</span>:null}
                    <h1 className="text-center p-5">{this.state.successMessage}</h1> 
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                    {(planet!==null || planet!==undefined)&&(planet.length>0)?<h2 className="m-2">Planet - <code className="badge badge-primary">{planet}</code></h2>:null}
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12">
                    {(planet!==null || planet!==undefined)&&(planet.length>0)?<h2 className="m-2">Time taken - <code className="badge badge-info">{this.state.totalTime}</code></h2>:null}
                    </div>
                </div>
                <div className="row back-btn justify-content-center">
                <div className='successButtons'>
                <Link to={{pathname:"/findFalcone",fromGame:true}}>
                    <button className="btn btn-lg btn-success">Play Again!</button>
                </Link>
                </div>
                <div className='successButtons'>
                <Link to={{pathname:"/",fromGame:true}} >
                    <button className="btn btn-lg btn-success">Go Home!</button>
                </Link>
                </div>
                </div>
                </div>
            </div>
            </React.Fragment>
        
        );
    }
}
 
export default Success;