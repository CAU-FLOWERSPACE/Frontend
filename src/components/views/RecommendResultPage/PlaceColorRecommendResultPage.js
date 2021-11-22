import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { ResultList, Container, ArButton, PlaceColorTitle } from './';


function PlaceColorRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response; //전체 데이터

    const flowerList = results.flowers;


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div>
                <Container>
                    <ResultList result = {flowerList}/>
                </Container>
            </div>
        </div>
    )
}
export default withRouter(PlaceColorRecommendResultPage)
