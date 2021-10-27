import React from 'react'
import styled from 'styled-components';

const Text = styled.p`

    position: absolute;
    width: 226px;
    height: 161px;
    left: 188px;
    top: ${props => props.top};

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 15px;

    color : #897F65;

  



`;

export default function CommendText() {

    return (
            <div>
                <Text top = "183px">당신의 심신을</Text>  
                <Text top = "200px">보살펴줄</Text>   
                <Text top = "217px">꽃을 찾아보세요</Text>
            

                <Text top = "378px">당신의 공간에</Text>
                <Text top = "395px">안정을 가져다줄</Text>
                <Text top = "411px">식물을 찾아보세요</Text>
            </div>
        
    )
}
