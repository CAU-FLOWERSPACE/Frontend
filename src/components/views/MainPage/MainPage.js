import React from 'react'
import { Logo, CommentBox, MenuBox, Img, TextBox, Text} from './';
import {BsFlower2, BsFlower3} from 'react-icons/bs';
import { useHistory, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {GiFlowerPot, GiPlantSeed, GiPhotoCamera, GiProtectionGlasses} from 'react-icons/gi';
import {RiPlantFill, RiPlantLine} from 'react-icons/ri';

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
        <>
            <Logo/>

            <MenuBox onClick = {onClickHandler1}> 
                <RiPlantLine size = "20px" style ={{marginRight : "10px"}} />
                나와 가장 잘 맞는 꽃 추천받기
            </MenuBox>

            <MenuBox onClick = {onClickHandler3}>
                <RiPlantLine size = "20px" style ={{marginRight : "14px"}} />
                내 공간을 밝혀줄 꽃 추천받기
            </MenuBox>

            <MenuBox onClick = {onClickHandler2}>
                <RiPlantLine size = "20px" style ={{marginRight : "10px"}} />
               내 공간 맞춤형 테라피 추천받기
            </MenuBox>
            


        </>
    )
}

export default withRouter(MainPage)
