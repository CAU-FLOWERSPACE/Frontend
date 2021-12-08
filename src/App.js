import logo from './logo.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
import Header from './components/views/Header';
import RecommendResultPage from './components/views/RecommendResultPage/RecommendResultPage';
import MainPage from './components/views/MainPage/MainPage';
import ColorTherapyIntroPage from './components/views/TherapyIntroPage/ColorTherapyIntroPage';
import FlowerDetailPage from './components/views/DetailInfoPage/FlowerDetailPage';
import UploadPage from './components/views/UploadPage/UploadPage';
import PlaceTherapyRecommendResultPage from './components/views/RecommendResultPage/PlaceTherapyRecommendResultPage';
import PlaceColorRecommendResultPage from './components/views/RecommendResultPage/PlaceColorRecommendResultPage';
import PlantDetailPage from './components/views/DetailInfoPage/PlantDetailPage';
import ARpage from './components/views/ARPage/ARpage';
import Logout from './components/views/LoginPage/Logout';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFFFFF;
  }
`;

// common
const Container = styled.div` 

padding-top : 57px;
width : 100%;

overflow-y : auto;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;

`

function App() {

  return (
    <div className = "app">
      <GlobalStyle/>
        <Container>
          <Router>
              <Switch>
                {/* auth로 감싸줘야한다! 몇가지 옵션 더 붙여서(출입가능여부 옵션 주기) */}
                {/* <Route exact path = "/" component = {Auth(LandingPage, null )}/>
                <Route exact path = "/login" component = {Auth(LoginPage, false)}/>
                <Route exact path = "/register" component = {Auth(RegisterPage, false)}/> */}
                <Route exact path = "/" component = {MainPage}/>
                <Route exact path = "/recommend" component = {RecommendMainPage}/>
                <Route exact path = "/login" component = {LoginPage}/>
                <Route exact path = "/join" component = {RegisterPage}/>
              
                <Route exact path = "/option1page" component = {Option1Page}/>
                <Route exact path = "/option2page" component = {Option2Page}/>
                <Route exact path = '/result' component = {RecommendResultPage}/>
                <Route exact path = "/main" component = {LandingPage} />
                <Route exact path = "/colorintro" component = {ColorTherapyIntroPage}/>
                <Route exact path = "/flower_detail" component = {FlowerDetailPage}/>
                <Route exact path = "/upload" component = {UploadPage}/>
                <Route exact path = "/place_color_result" component = {PlaceColorRecommendResultPage}/>
                <Route exact path = "/place_therapy_result" component = {PlaceTherapyRecommendResultPage}/>
                <Route exact path = "/plant_detail" component = {PlantDetailPage}/>
                <Route exact path = "/ar" component = {ARpage}/>
                <Route exact path = "/out" component = {Logout}/>
              </Switch>
              <BottomNav/>
        </Router>
        </Container>
    </div>
  );
}

export default App;
