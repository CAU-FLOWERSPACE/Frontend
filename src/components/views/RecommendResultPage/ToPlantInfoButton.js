import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { flowerDetail, plantDetail } from '../../../_actions/user_action';
import {MdManageSearch } from 'react-icons/md';
const Button = styled.div`
width: 60px;
height: 40px;

border : none;
color : #698F7E;

display : flex;
margin : 0 auto;
//버튼 내 텍스트 가운데로 
justify-content : center;
align-items : center;

&:active{

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
        <Button onClick = {onClickHandler}><MdManageSearch/></Button>
    )
}
