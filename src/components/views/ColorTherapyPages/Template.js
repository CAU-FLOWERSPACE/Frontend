import React from 'react';
import styled from 'styled-components';

const Block = styled.div`

    margin : 0 auto; 

`



export default function Template({children}) {
    return <Block>{children}</Block>
}
