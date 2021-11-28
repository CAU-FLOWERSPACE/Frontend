import React from 'react';
import { useLocation, withRouter } from 'react-router';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';




function ARpage() {

    const location = useLocation();
    const code = location.state.response;

    return (
        <div style={{width : "100%", height : "100vh"}}> 
            <iframe srcdoc = {code} 
            // frameborder = "0" 
            width = "100%" 
            height = "100%" //%로 해야함
            //scrolling = "no" 
     
            >
                대체정보
            </iframe>
        </div>
    )
}

export default withRouter(ARpage)
