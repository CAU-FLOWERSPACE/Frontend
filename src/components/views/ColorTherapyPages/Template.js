import React from 'react';
import styled from 'styled-components';

const Block = styled.div`

    width: 324px;
    height: 477px;

    position : relative;
    background: rgba(226, 194, 185, 0.4);

    margin : 0 auto; 

    margin-top : 98px;
    margin-bottom:32px;

    display : flex;
    flex-direction : column;

`



export default function Template({children}) {
    return <Block>{children}</Block>
}
