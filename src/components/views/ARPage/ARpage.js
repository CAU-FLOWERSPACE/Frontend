import React from 'react';
import { useLocation, withRouter } from 'react-router';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';




function ARpage() {

    const location = useLocation();
    const code = location.state.response;

    return (
        <div >
            <iframe srcdoc = {code} 
            frameborder = "0" 
            width = "100%" 
            height = "110vh" 
            //scrolling = "no" 
            //onLoad = "do"
            >
                대체정보
            </iframe>
        </div>
    )
}

export default withRouter(ARpage)
