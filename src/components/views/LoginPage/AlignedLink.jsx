import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Aligner = styled.div`
   
    height: 20px;
    top: 470px;

    margin : 0 auto;
    margin-top : 5px;
    margin-bottom : 10px;
    color : #828282;

`;

const StyledLink = styled(Link)`

    font-size: 12px;
    color : #828282;
    line-height: 12px;
    text-decoration-line: underline;

    margin : 0 auto;
    margin-top : 5px;
    margin-bottom : 10px;

    color: #8A8168;

`

export default function AlignedLink({to, children}) {
    return (
        <Aligner>
            <StyledLink to = {to}>{children}</StyledLink>
        </Aligner>
    )
}
