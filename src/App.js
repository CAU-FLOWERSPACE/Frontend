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
import RecommendMainPage from './components/views/RecommendMainPage/RecommendMainPage';
import Option1Page from './components/views/ColorTherapyPages/Option1Page';

//import Auth from './hoc/auth'; //Auth는 이름을 지은것!

function App() {

  const [testStr, setTestStr ] = useState('');
  const [isLoading, setIsLoading] = useState(true);

 //여기 
  // useEffect(
  //   ()=>{
  //     axios.get('http://localhost:8080/api/test')
  //     // .then(reponse => { console.log(reponse)})
  //     .then((Reponse)=>{setTestStr(Reponse.data)
  //       console.log(Reponse.data)
  //       setIsLoading(false);
  //     })
  //     .catch((Error)=>{console.log(Error)})
  //     console.log(testStr)
  //   },[testStr]
  // );

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


    <Router>
      <div>
        <Switch>
{/* auth로 감싸줘야한다! 몇가지 옵션 더 붙여서(출입가능여부 옵션 주기) */}
          {/* <Route exact path = "/" component = {Auth(LandingPage, null )}/>
          <Route exact path = "/login" component = {Auth(LoginPage, false)}/>
          <Route exact path = "/register" component = {Auth(RegisterPage, false)}/> */}
          <Route exact path = "/" component = {LandingPage}/>
          <Route exact path = "/login" component = {LoginPage}/>
          <Route exact path = "/join" component = {RegisterPage}/>
          <Route exact path = "/recommend" component = {RecommendMainPage}/>
          <Route exact path = "/option1page" component = {Option1Page}/>
        </Switch>
      </div> 
    </Router>
    
//여기만 주석 풀기
    // <div className = "App">
    //   <header className="App-header">
    //     api/test == {'>'}
    //     {!isLoading && <span>{testStr}</span>  }
    //     <br></br>

    //   </header>

    // </div>
    
  );
}

export default App;
