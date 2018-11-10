import React, {Component} from 'react';
import Baseroute from './Baseroute';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import PokeSearch from './PokeSearch';

class App extends Component {
  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route 
          path="/pokesearch/:name"
          render={props => (
            <PokeSearch key={props.match.params.name} {...props} />
          )} />
          <Route exact path="/" component={PokeSearch} />
          <Route path= "/Baseroute/:name" component={Baseroute} />
        </Switch>
      </div>
    </BrowserRouter> 
    );
  }
}

export default App;
