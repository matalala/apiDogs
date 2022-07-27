import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import Lading from './componentes/lading/index'
import Home from './componentes/home/Home'
import DetalleDogs from './componentes/detalles-dogs/DetallesDogs'
function App() {

  return(
    
 
     <Router>
   
     <Switch>
     <Route exact path='/'>
     <Lading/>
     </Route>
     <Route path='/home'>
     <Home/>
     </Route>
     <Route
     exact path='/detalles'>
      <DetalleDogs/>
     </Route>
     
     </Switch>
   </Router>
  )
   
  }


export default App;
