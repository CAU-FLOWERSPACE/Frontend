import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Title, ResultList, Container, ArButton, PlaceColorTitle } from './';


function PlaceColorRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response; //전체 데이터

    console.log(`결과 : ${results}`);
    const flowerList = results.flowers;


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div>
                <Container>
                    <Title>당신의 공간에 어울리는 꽃은 ...</Title>
                    <ResultList result = {flowerList}/>
                </Container>
            </div>
        </div>
    )
}
export default withRouter(PlaceColorRecommendResultPage)
