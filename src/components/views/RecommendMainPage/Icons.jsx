import React from 'react'
import styled from 'styled-components'
import {RiPlantLine} from 'react-icons/ri';
import {BsFlower2, BsFlower3} from 'react-icons/bs';
import {GiFlowerPot, GiPlantSeed, GiFlowers, GiButterflyFlower} from 'react-icons/gi';


const Icon = styled.div`

    display : flex;
    justify-content : center;
    align-items : center;
 

    .flower{
        
        color : rgba(219, 188, 171, 0.7);
        margin-top : 25px;

        weight : 120px;
        height : 120px;
    }

    .plant{

        color : rgba(153, 155, 132, 0.45);
        margin-top : 25px;

        weight : 120px;
        height : 120px;
        
    }
`



export default function Icons({isFlower}) {
    return (
        isFlower ? <Icon><GiFlowerPot className = "flower" size/></Icon> : <Icon><GiPlantSeed className = "plant" size/></Icon>
    )
}
