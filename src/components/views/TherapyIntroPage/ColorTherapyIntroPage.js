import React from 'react'
import { Container, StartButton, TextArea } from './';

export default function ColorTherapyIntroPage(props) 
{
    const onClickHandler = (event) =>
    {
        props.history.push("/option1page")
    }

    return (
        <Container>
            <TextArea>
            <p>꽃간의 컬러테라피에서는</p>
            <p>코로나로 인해 지친 몸과 마음을</p>
            <p>꽃으로 달래드립니다.</p>
            <p>어떤 꽃이 나를 기다리고 있을지</p>
            <p>궁금하지 않으신가요?</p>
            <p>그렇다면 간단한 질문을 통해</p>
            <p>나를 위로해줄 꽃을 찾아보세요 !</p>
            </TextArea>
            <StartButton onClick = {onClickHandler}>
                시작하기
            </StartButton>
        </Container>
    )
}
