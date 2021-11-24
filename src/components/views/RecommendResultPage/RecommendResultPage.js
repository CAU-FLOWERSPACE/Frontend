import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ResultList, Container, ArButton, Title } from './';
import { useHistory } from 'react-router';

function RecommendResultPage() { 

    const location = useLocation();
    const results = location.state.response;
    console.log(results);

    const history = useHistory();
    

    const onClickHandler = (event) =>
    {
        console.log("click! ar로 이동 ");
        history.push(
            { 
                pathname : "/ar",
                state : { plant_list : results}
            }
        )
        
        
    }


 


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <Title>flower님의 추천 꽃은 ... </Title>
                    <ResultList result = {results}/>
                </Container>
                {/* <ArButton onClick = {onClickHandler}/> */}
                {/* <ArButton onClick = {onClickHandler}>ar로 이동</ArButton> */}
                <Link to = 
                {{
                    pathname : "/ar",
                    state : {plant_list : results}
                }}>ar로 이동</Link>
            </div>
           
        </div>
    )
}

export default withRouter(RecommendResultPage)
