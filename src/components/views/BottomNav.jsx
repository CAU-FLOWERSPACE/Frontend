import React, {useState} from 'react';
import "../../BottomNav.css";
import {RiPlantFill, RiPlantLine} from 'react-icons/ri';
import {BsFlower2, BsFillPersonFill, BsPersonBadgeFill} from 'react-icons/bs';
import {AiFillVideoCamera} from 'react-icons/ai';
import {IoMdFlower, IoIosColorPalette} from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function BottomNav() {

    const [activeNav, setActiveNav] = useState(3);

    console.log("bottomnav rendering ")

    return (
        <div>
            <nav className = "wrapper">
                <div>
                    <Link to = '/recommend' className = "nav-link" onClick={() => setActiveNav(1)}>
                        <IoIosColorPalette className = { activeNav === 1 ? "nav-item active" : "nav-item"} size = "20px"/>
                    </Link>
                </div>
                <div>
                    <Link to = '/' className = "nav-link" onClick={() => setActiveNav(2)}>
                        <RiPlantFill className = { activeNav === 2 ? "nav-item active" : "nav-item"} size = "20px"/>
                    </Link>
                </div>
                <div>
                    <Link to = '/' className = "nav-link"onClick={() => setActiveNav(3)}>
                        <BsFlower2 className = { activeNav === 3 ? "nav-item active" : "nav-item"} size = "20px"/>
                    </Link>
                </div>
                <div>
                    <Link to = '/login' className = "nav-link" onClick={() => setActiveNav(4)}>
                        <AiFillVideoCamera className = { activeNav === 4 ? "nav-item active" : "nav-item"} size = "20px"/>
                    </Link>
                </div>
                <div>
                    <Link to = '/login' className = "nav-link" onClick={() => setActiveNav(5)}>
                        <BsFillPersonFill className = { activeNav === 5 ? "nav-item active" : "nav-item"} size = "20px"/>
                    </Link>
                </div>
            
            </nav>
        </div>
    )
}
