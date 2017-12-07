import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Cabecera}  from './Componentes/headerCmp';

import { Switch, Route } from 'react-router-dom';
import { InicioCmp } from './Componentes/InicioCmp';
import { cfgPrinterCmp } from './Componentes/cfgPrinterCmp';
import { webSocketCmp } from './Componentes/webSocketCmp';

/*class App extends Component {
  render() {
    return ( 
      
      <div className="App">
               
        <Cabecera />
      </div>
    );
  }
}*/
const Principal = () => (
  <main>
    <Switch>
      <Route exact path='/' component={InicioCmp}/>    
      <Route exact path='/inicio' component={InicioCmp}/> 
      <Route exact path='/websocket' component={webSocketCmp}/>
      <Route exact path='/cfg' component={cfgPrinterCmp}/>
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Cabecera />
    <Principal />
    <Principal />
  </div>
)

export default App;
