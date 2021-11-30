import React from 'react';
import styled from 'styled-components';

const Effect = styled.div`

    font-size: 13px;
    color: #828282;
`
export default function TherapyEffect({children}) {
    return (
        <>
            <Effect>아래의 식물들로</Effect>
            <Effect>{children} 효과를 누려보세요.</Effect>
        </>
    )
}
