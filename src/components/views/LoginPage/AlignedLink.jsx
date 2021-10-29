import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Aligner = styled.div`
    position: absolute;
    width: 71px;
    height: 20px;
    left: 165px;
    top: 470px;

`;

const StyledLink = styled(Link)`

    font-family: 'Nanum Myeongjo', serif;
    font-style : normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-decoration-line: underline;

    color: #8A8168;

`

export default function AlignedLink({to, children}) {
    return (
        <Aligner>
            <StyledLink to = {to}>{children}</StyledLink>
        </Aligner>
    )
}
