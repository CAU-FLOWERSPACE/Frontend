import React from 'react'
import { Container, CommentBox, MenuBox, Img, TextBox, Text} from './';
import {BsFlower2, BsFlower3} from 'react-icons/bs';
import { useHistory, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {GiFlowerPot, GiPlantSeed, GiPhotoCamera, GiProtectionGlasses} from 'react-icons/gi';

function MainPage(props) {

    const history = useHistory();

    const onClickHandler1 = (event) =>
    {
        props.history.push('/option1page')
    }

    const onClickHandler2 = (event) =>
    {
        history.push({
            pathname : '/upload',
            state : {choice : 1}
        })
    }

    const onClickHandler3 = (event) =>
    {
        history.push({
            pathname : '/upload',
            state : {choice : 2}
        })
    }


    return (
        <Container>
            

            <CommentBox>
                <Text style = {{float : "left"}}> 안녕 일상 속 작은 변화 ,</Text>
                <Text style = {{fontSize : "24px", float:"right", right: "20px" }}>꽃 : 간</Text>
            </CommentBox>

            <MenuBox onClick = {onClickHandler1}> 
            {/* 각 메뉴박스의 이미지, 텍스트는 여기서 명시 */}
                <TextBox>
                    <p>당신의 심신을</p>
                    <p>보살펴줄 , </p>
                    <p style ={{ fontSize : "17px", paddingTop : "10px"}}>컬러 테라피</p>
                </TextBox>
                <Img>
                    {/* <img src = "img/color.jpg" width = "100%" /> */}
                    <GiFlowerPot size = "90%" style = {{ padding : "10px"}}/>
                </Img>
            </MenuBox>

            <MenuBox onClick = {onClickHandler2}>
                <Img>
                    {/* <img src = "img/place.jpg" width = "100%"/> */}
                    <GiPlantSeed size = "90%" style = {{ padding : "10px"}}/>
                </Img>
                <TextBox>
                    <p>당신의 공간에</p>
                    <p>안정을 선물해줄 , </p>
                    <p style ={{ fontSize : "17px", paddingTop : "10px"}}>공간 테라피</p>
                </TextBox>
            
            </MenuBox>

            <MenuBox onClick = {onClickHandler3}>
                <TextBox>
                    <p>내 공간에</p>
                    <p>직접 배치해보는</p>
                    <p style ={{ fontSize : "17px", paddingTop : "10px"}}>나만의 AR</p>
                </TextBox>
                <Img>
                    {/* <img src = "img/ar.jpg" width = "100%"/> */}
                    <GiProtectionGlasses size = "90%" style = {{ padding : "10px"}}/>
                </Img>
            </MenuBox>
            


        </Container>
    )
}

export default withRouter(MainPage)
