import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { flowerDetail, plantDetail } from '../../../_actions/user_action';

const Button = styled.button`
    width: 130px;
    height: 30px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-shadow: 0px 4px 4px rgba(150, 134, 97, 0.5);
    border-radius: 50px;

    color : #897F65;

    display : flex;
    margin : 0 auto;
  
    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;
  
    &:active{
        background: #CFC19F;
        font-weight : normal;
        color : #FFFBE1;

    }

`

export default function ToPlantInfoButton({id, children}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const onClickHandler = (event) =>
    {
        event.preventDefault();
        
        console.log(id);

        dispatch(plantDetail(id))
        .then((response) => {

            history.push({
                pathname : '/plant_detail',
                state : {response : response.payload}
            })
        })

    }

    return (
        <Button onClick = {onClickHandler}>{children}</Button>
    )
}
