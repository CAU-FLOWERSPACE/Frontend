import React from 'react'
import styled from 'styled-components'
const Button = styled.button`
`
export default function LogoutBtn({...rest}) {
    return (
        <Button {...rest}>f로그아웃</Button>
    )
}
