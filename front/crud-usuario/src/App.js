import {Navbar} from './components/navbar/NavBar';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
      </div>
    </Router>
  );
}

export default App;
