import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ResultList, Container, ArButton, Title } from './';

function RecommendResultPage() { 

    const location = useLocation();
    const results = location.state.response;

    console.log(results);

    // const onClickHandler = (event) =>
    // {
    //     console.log("click! ar로 이동 ")
        
        
    // }

    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <Title>flower님의 추천 꽃은 ... </Title>
                    <ResultList result = {results}/>
                </Container>
                {/* <ArButton onClick = {onClickHandler}/> */}
                {/* <Link to = "webAR.html">ar로 이동</Link> */}
            </div>
           
        </div>
    )
}

export default withRouter(RecommendResultPage)
