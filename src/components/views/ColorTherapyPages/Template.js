import React from 'react';
import styled from 'styled-components';

const Block = styled.div`

    width: 324px;
    height: 600px;

    position : relative;
   // background: rgba(230, 221, 198, 0.4);

    margin : 0 auto; 

    margin-top : 98px;
    margin-bottom:32px;

    display : flex;
    flex-direction : column;

    border : 1px solid black;
    overflow-y : auto;

`



export default function Template({children}) {
    return <Block>{children}</Block>
}
