import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { flowerDetail } from '../../../_actions/user_action';
import {MdManageSearch} from 'react-icons/md';

const Button = styled.div`
    width: 70px;
    height: 40px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    background: #D9CFB6;
    //border: 1px solid #D9CFB6;
    border: 3px solid #CFC19F;
    //border : 1px solid red;
    //box-shadow: 0px 4px 4px rgba(150, 134, 97, 0.5);
    border-radius: 10px;

    color : #897F65;

    display : flex;
    margin : 0 auto;
    // float : right;
    // margin-right : 17px;

    
  
    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;
  
    &:active{
        background: #CFC19F;
        font-weight : normal;
        color : #FFFBE1;

    }

`

export default function ToInfoButton({id}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const onClickHandler = (event) => {
        //dispatch(id) 해서 받아온 payload를 상세보기 페이지에 넘겹주기
        event.preventDefault();
        
        console.log(id);

        
        dispatch(flowerDetail(id))
        .then(response => {
             //백에게 받은 데이터를 다음 페이지에 넘겨주는 아래의 로직

            console.log(` dispatch해서 받아오기 성공 : ${response.payload}`) 
            history.push(
            {
                pathname : "/flower_detail",
                state : { response : response.payload } //뭉텅이를 다음 페이지에 전달
            }
           )
        })
    
    
    }


    return (
        <Button onClick = {onClickHandler}><MdManageSearch size = "85%"/></Button> //이모티콘
    );
}
