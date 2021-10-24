import logo from './logo.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';

import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link
}from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {

  const [testStr, setTestStr ] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    ()=>{
      axios.get('http://localhost:8080/api/test')
      // .then(reponse => { console.log(reponse)})
      .then((Reponse)=>{setTestStr(Reponse.data)
        console.log(Reponse.data)
        setIsLoading(false);
      })
      .catch((Error)=>{console.log(Error)})
      console.log(testStr)
    },[testStr]
  );

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Router>
    //   <div>
    //     <Switch>

    //       <Route exact path = "/" component = {LandingPage}/>
    //       <Route exact path = "/login" component = {LoginPage}/>
    //       <Route exact path = "/register" component = {RegisterPage}/>
            
    //     </Switch>
    //   </div>
    // </Router>

    <div className = "App">
      <header className="App-header">
        api/test == {'>'}
        {!isLoading && <span>{testStr}</span>  }
        <br></br>

      </header>

    </div>
    
  );
}

export default App;
