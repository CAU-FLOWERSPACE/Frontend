import React from 'react'
import styled from 'styled-components'

const Box = styled.div`

    width: 328px;
    height: 180px;

    padding : 40px;

    background: #FFFCF4;
    border-radius: 20px;
    margin : 0 auto;

    background-image : URL("img/main.jpg");
    background-size : 100%; //비율 맞춰 꽉차게

`

export default function CommentBox({children}) {
    return (
        <Box style={{objectFit : "cover"}}>
            {children}
        </Box>
    )
}
