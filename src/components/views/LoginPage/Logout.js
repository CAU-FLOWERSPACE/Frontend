import React from 'react'
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../_actions/user_action';
import { LogoutBtn } from '.';

function Logout(props) {

    const dispatch = useDispatch();

    const onLogout = (event) =>
    {
        dispatch(logoutUser())
        .then((response) => {
            console.log("로그아웃 완료")
         
        })
    }

    return (
        <div>
            <LogoutBtn onClick = {onLogout}/>
        </div>
    )
}

export default withRouter(Logout)