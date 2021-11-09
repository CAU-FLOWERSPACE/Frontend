import React from 'react'
import "../../Header.css";


export default function Header() {
    return (
        <div className = "header"> 
            <img src = "img/login.png" style = 
            {{display : "block",
                marginLeft: "auto",
                marginRight : "auto",
                padding : "3px 0"
            }}/>
            
        </div>
    )
}
