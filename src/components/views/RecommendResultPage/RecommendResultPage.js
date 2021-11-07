import React from 'react'
import { withRouter } from 'react-router';
import { ResultList, Container, ArButton } from './';

function RecommendResultPage() {

    

    const onClickHandler = (event) =>
    {
        

        //console.log("click! ar로 이동 ")
        
    }

    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <ResultList/>
                </Container>
                <ArButton onClick = {onClickHandler}/>
            </div>
           
        </div>
    )
}

export default withRouter(RecommendResultPage)
