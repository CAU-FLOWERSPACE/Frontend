import React from 'react'
import GoogleLogin from 'react-google-login';

export default function GoogleButton() { //나중에는 onSocial 인자 주기 => 이게 백엔드랑 연결되나?

    const onSuccess = (response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        // await onSocial({
        //     socialId : googleId,
        //     socialType : 'google',
        //     email,
        //     nickname : name
        // });

        console.log(response.profileObj);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin 
                clientId="60972666132-m3t7khj11k892im4bal28v4muj78rlq9.apps.googleusercontent.com" //발급받은 아이디
                responseType={"id_token"}
                buttonText = "Login"
                // onSuccess={this.reponseGoogle}
                // onFailure={this.reponseGoogle}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                

                />
        </div>
    )
}
