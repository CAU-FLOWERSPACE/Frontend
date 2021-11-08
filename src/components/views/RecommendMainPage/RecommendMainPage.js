import React from 'react'
import styled from 'styled-components'
import {Buttons, CommendText, Icons} from './';
import { withRouter } from 'react-router';
import '../../../LandingPage.css';

function RecommendMainPage(props) {

    const onMoveToColorHandler = (event) =>
    {
        console.log("click!")
        props.history.push('/option1page')
    }

    const onMoveToSpaceHandler = (event) =>
    {
        props.history.push('/')
    }

    

    return (
        <div>
            <div className = "container">
            
                <div className = "logo">
                    <Icons isFlower = {true}/>
                </div>
                <div className = "text">
                    <CommendText>심신이 지친 당신을 위로해줄</CommendText>
                    <CommendText>꽃들을 찾아보세요</CommendText>
                </div>
                <div className = "button">
                    <Buttons onClick = {onMoveToColorHandler} >컬러 테라피</Buttons>
                </div>
            </div>

            <div className = "container">
                <div className = "logo">
                    <Icons isFlower = {false}/>
                </div>
                <div className = "text">
                    <CommendText>당신의 공간에 안정을 가져다줄</CommendText>
                    
                    <CommendText>식물들을 찾아보세요</CommendText>
                </div>
                <div className = "button">
                    <Buttons>공간 테라피</Buttons>
                </div>

            </div>
        </div>
    )
}
export default withRouter(RecommendMainPage)
