import logo from './logo.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

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
import Option2Page from './components/views/ColorTherapyPages/Option2Page';
import BottomNav from './components/views/BottomNav';
import RecommendResultPage from './components/views/RecommendResultPage/RecommendResultPage';


//import ResultPage from './components/views/ResultPage/ResultPage';

//import Auth from './hoc/auth'; //Auth는 이름을 지은것!

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color : #F7F4E3;
`

function App() {

  return (
 
    <Router>
      <Container>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
        </Switch>
        
        <BottomNav/> 
        <Switch>
{/* auth로 감싸줘야한다! 몇가지 옵션 더 붙여서(출입가능여부 옵션 주기) */}
          {/* <Route exact path = "/" component = {Auth(LandingPage, null )}/>
          <Route exact path = "/login" component = {Auth(LoginPage, false)}/>
          <Route exact path = "/register" component = {Auth(RegisterPage, false)}/> */}
         
          <Route exact path = "/recommend" component = {RecommendMainPage}/>
          <Route exact path = "/login" component = {LoginPage}/>
          <Route exact path = "/join" component = {RegisterPage}/>
        
          <Route exact path = "/option1page" component = {Option1Page}/>
          <Route exact path = "/option2page" component = {Option2Page}/>
          {/* <Route exact path = "/resultpage" component = {ResultPage}/> */}
          <Route exact path = '/result' component = {RecommendResultPage}/>
        
        </Switch>
      </Container> 
    </Router>
    
  );
}

export default App;
