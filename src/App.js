
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './mdi/css/materialdesignicons.min.css';
 import './App.css';
 import './Startup.css';
 import './Home.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import StartUps from './Components/StartUps';
import Router from './Router';

function App() {
  return (
    <div>
      <Router />
      <Footer /> 
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <StartUps /> */}
    </div>
  );
}

export default App;
