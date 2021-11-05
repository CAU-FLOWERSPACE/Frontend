import React from 'react'
import styled from 'styled-components'
import {RiPlantLine} from 'react-icons/ri';
import {BsFlower2, BsFlower3} from 'react-icons/bs';
import {GiFlowerPot, GiPlantSeed, GiFlowers, GiButterflyFlower} from 'react-icons/gi';


const Icon = styled.div`
    // position: absolute;
    // width: 99px;
    // height: 115px;
    // top: ${props=>props.top};
   // margin-left : 10px;

    .flower{
        margin-top : 25px;
        color : rgba(219, 188, 171, 0.7);
        weight : 120px;
        height : 120px;
    }

    .plant{
        margin-top : 25px;
        color : rgba(153, 155, 132, 0.45);
        weight : 120px;
        height : 120px;
    }
`



export default function Icons({isFlower}) {
    return (
        isFlower ? <Icon><GiFlowerPot className = "flower" size/></Icon> : <Icon><GiPlantSeed className = "plant" size/></Icon>
    )
}
