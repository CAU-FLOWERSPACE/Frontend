import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ResultList, Container, Title, ToGoButton, ButtonContainer } from './';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {arSubmit} from '../../../_actions/user_action';
function RecommendResultPage() { 

    const location = useLocation();
    const results = location.state.response;
    console.log(`result : ${results}`);

    const history = useHistory();
    const dispatch = useDispatch();
    

    // const onClickHandler = (event) =>
    // {
    //     console.log("click! ar로 이동 ");
    //     // history.push(
    //     //     { 
    //     //         pathname : "/ar",
    //     //         state : { plant_list : results}
    //     //     }
    //     // )

    //     //dispatch
        
        
    // }

    let body = {
        "plants" : results
    }

    console.log(`body : ${body}`);

    const onMoveToMain = (event) =>
    {
        history.push('/');

    }

    const onMoveToAR = (event) =>
    {
        dispatch(arSubmit(body))
        .then(response => {
            console.log(`데이터 : ${response.payload}`)
            history.push(
                {
                    pathname : "/ar",
                    state : { response : response.payload}
                }
            )
        })
    }


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                
                <Container>
                    <Title>flower님의 추천 꽃은 ... </Title>
                    <ButtonContainer>
                        <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
                        <ToGoButton onClick = {onMoveToAR}>ar 이동</ToGoButton>
                    </ButtonContainer>
                    <ResultList result = {results}/>
                </Container>
                
            </div>
           
        </div>
    )
}

export default withRouter(RecommendResultPage)
