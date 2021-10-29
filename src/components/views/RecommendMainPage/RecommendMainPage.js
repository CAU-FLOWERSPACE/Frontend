import React from 'react'
import styled from 'styled-components'
import {Buttons, CommendText, Icons} from './';
import '../../../LandingPage.css';

export default function RecommendMainPage(props) {

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
                    <CommendText>몸과 마음이 지친 당신을 보살펴줄</CommendText>
                    <br/>
                    <CommendText>꽃들을 찾아보세요</CommendText>
                </div>
                {/* <div> */}
                    <Buttons onSubmit = {onMoveToColorHandler} className = "button" >컬러 테라피</Buttons>
                {/* </div> */}
            </div>

            <div className = "container">
                <div className = "logo">
                    <Icons isFlower = {false}/>
                </div>
                <div className = "text">
                    <CommendText>당신의 공간에 안정을 가져다줄</CommendText>
                    <br/>
                    <CommendText>식물들을 찾아보세요</CommendText>
                </div>
                <div>
                    <Buttons className = "button">공간 테라피</Buttons>
                </div>

            </div>
            
            {/* <CommendText/>
            <Icons isFlower = {true}/>
            <Icons isFlower = {false}/>
            <Buttons top = "286px" onClick = {onMoveToColorHandler}>컬러테라피</Buttons>
            <Buttons top = "480px" onClick = {onMoveToSpaceHandler}>공간테라피</Buttons> */}
        </div>
    )
}
