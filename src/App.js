import React from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import FinalDestination from './Game/finalDestination';
import Success from './Game/success';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
        <Route path="/" exact component={FinalDestination}/>
        <Route path="/success" component={Success}/>
        </Switch>
      </Router>
      <Footer />     
    </React.Fragment>
  );
}

export default App;
