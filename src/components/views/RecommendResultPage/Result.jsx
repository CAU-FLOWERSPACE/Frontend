import React from 'react'
import Button from '@restart/ui/esm/Button'
import Card from 'react-bootstrap/Card'

export default function Result({title}) {
    return (
        <Card style={{width : '15rem', marginBottom : "10px", display : "block", marginLeft : "auto", marginRight : "auto"}}>
            <Card.Img variant = "top" src= "img/background.jpg"/>
            <Card.Body>
                {/* card body는 카드 안에 있어야함 */}
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    내용
                </Card.Text>
                <Button variant="primary">상세정보로</Button>
            </Card.Body>
        </Card>
    )
}
