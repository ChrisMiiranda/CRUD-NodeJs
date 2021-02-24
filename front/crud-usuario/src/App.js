import {Navbar} from './components/navbar/NavBar';
import {Cadastro} from './components/cadastro/Cadastro';
import {Listagem} from './components/listagem/Listagem';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
      </div>
      <Switch>
        <Route exact path="/listagem" component={Listagem} />
        <Route exact path={["/","/cadastro"]} component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;
