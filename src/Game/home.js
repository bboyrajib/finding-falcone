import React, { Component } from 'react';
import './home.scss';
import Donlon from './Resources/Donlon.png';
import Enchai from './Resources/Enchai.png';
import Jebing from './Resources/Jebing.png';
import Sapir from './Resources/Sapir.png';
import Lerbin from './Resources/Lerbin.png';
import Pingasor from './Resources/Pingasor.png';
import SpacePod from './Resources/SpacePod.png';
import SpaceRocket from './Resources/SpaceRocket.png';
import SpaceShuttle from './Resources/SpaceShuttle.png';
import SpaceShip from './Resources/SpaceShip.png';
import {Link} from 'react-router-dom';
class Home extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col text-justify">
                        <h4>
                        The story is about the planet of Lengaburu in the distant galaxy of Tara B. After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years.
                        </h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col text-justify">
                        <h4>
                        Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years.
                        </h4>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col text-justify">
                        <h4>
                        King Shan has received intelligence that Al Falcone is hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these planets.
                        </h4>
                    </div>
                </div>
                <br></br><br></br>
                <h2 className="text-center">POTENTIAL HIDEOUTS</h2>
                <br></br>
                <div id="planets" className="row">
                    <div className="col text-center">
                        <figure>
                            <img className="rounded-circle" src={Donlon} alt="Donlon"/>
                            <figcaption>
                                <b>Donlon</b><br></br>Distance - <code>100 MM</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img className="rounded-circle" src={Enchai} alt="Enchai" />
                            <figcaption>
                                <b>Enchai</b><br></br>Distance - <code>200 MM </code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img className="rounded-circle" src={Jebing} alt="Jebing"/>
                            <figcaption>
                                <b>Jebing</b><br></br>Distance - <code>300 MM</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img className="rounded-circle" src={Sapir} alt="Sapir"/>
                            <figcaption>
                                <b>Sapir</b><br></br>Distance - <code>400 MM</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img id ="lerbin" className="rounded-circle" src={Lerbin} alt="Lerbin"/>
                            <figcaption>
                                <b>Lerbin</b><br></br>Distance - <code>500 MM</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img className="rounded-circle" src={Pingasor} alt="Pingasor" />
                            <figcaption>
                                <b>Pingasor</b><br></br>Distance - <code>600 MM</code>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <br></br><br></br>
                <h2 className="text-center">AVAILABLE VEHICLES</h2>
                <br></br>
                <div className="row">
                    <div className="col text-center">
                        <h4>
                        These are the list of vehicles and their details that are available at King Shan's disposal.
                        </h4>
                    </div>
                </div>
                <br></br><br></br>
                <div className="row" id="vehicles">
                    <div className="col text-center">
                        <figure>
                            <img src={SpacePod} alt="Space Pod"/>
                            <figcaption>
                                <b>Space Pod</b><br></br>Max Distance - <code>200 MM</code>
                                <br></br>Speed - <code>2 MM/hour</code>
                                <br></br>Units Available - <code>2</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img src={SpaceRocket} alt="Space Rocket" />
                            <figcaption>
                                <b>Space Rocket</b><br></br>Max Distance - <code>300 MM</code>
                                <br></br>Speed - <code>4 MM/hour</code>
                                <br></br>Units Available - <code>1</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img src={SpaceShuttle} alt="Space Shuttle"/>
                            <figcaption>
                                <b>Space Shuttle</b><br></br>Max Distance - <code>400 MM</code>
                                <br></br>Speed - <code>5 MM/hour</code>
                                <br></br>Units Available - <code>1</code>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col text-center">
                        <figure>
                            <img src={SpaceShip} alt="Space Ship"/>
                            <figcaption>
                                <b>Space Ship</b><br></br>Max Distance - <code>600 MM</code>
                                <br></br>Speed - <code>10 MM/hour</code>
                                <br></br>Units Available - <code>2</code>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="col text-center">
                        <h2>
                        Can you help King Shan in finding Queen Al Falcone?
                        </h2>
                    </div>
                </div>
                <br></br>
                <div className="row justify-content-center">
                <Link to={{pathname:"/findFalcone",fromGame:true}}>
                    <button className="btn btn-lg btn-success">Let's Start!</button>
                </Link>
                </div>
                <br></br><br></br>
            </div>
         );
    }
}
 
export default Home;