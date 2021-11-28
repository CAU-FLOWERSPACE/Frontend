import React from 'react';
import styled from 'styled-components';

const Block = styled.div`


    //position : relative;
   // background: rgba(230, 221, 198, 0.4);

    margin : 0 auto; 

    //margin-top : 98px;
    padding-top : 55px;
    //margin-bottom:32px;

    // display : flex;
    //  flex-direction : column; //?

    //padding : 10px 0;

    //border : 1px solid black;
    //overflow-y : auto;

`



export default function Template({children}) {
    return <Block>{children}</Block>
}
