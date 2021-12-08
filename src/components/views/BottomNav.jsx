import React, {useState} from 'react';
import "../../BottomNav.css";
import {RiPlantFill, RiPlantLine} from 'react-icons/ri';
import {BsFlower2, BsFillPersonFill, BsPersonBadgeFill} from 'react-icons/bs';
import {AiFillVideoCamera} from 'react-icons/ai';
import {HiOutlineHome} from 'react-icons/hi';
import {GrHome} from 'react-icons/gr';
import {BiHomeAlt} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function BottomNav() {

    const [activeNav, setActiveNav] = useState(1);

    console.log("bottomnav rendering ")

    return (
        <>
            <nav className = "wrapper">
                <div>
                    <Link to = '/' className = "nav-link" onClick={() => setActiveNav(1)}>
                        <HiOutlineHome className = { activeNav === 1 ? "nav-item active" : "nav-item"} size = "27px"/>
                    </Link>
                    </div>
                        {/* <div>
                            <Link to = '/option1page' className = "nav-link" onClick={() => setActiveNav(2)}>
                                <BsFlower2 className = { activeNav === 2 ? "nav-item active" : "nav-item"} size = "23px"/>
                            </Link>
                        </div>
                        <div>
                            <Link to = '/upload' className = "nav-link" onClick={() => setActiveNav(3)}>
                                <RiPlantFill className = { activeNav === 3 ? "nav-item active" : "nav-item"} size = "23px"/>
                            </Link>
                        </div> */}
    
                <div>
                    <Link to = '/login' className = "nav-link" onClick={() => setActiveNav(4)}>
                        <BsFillPersonFill className = { activeNav === 4 ? "nav-item active" : "nav-item"} size = "27px"/>
                    </Link>
                </div>
                    
            </nav>
      
        </>
    
    )
}

export default BottomNav;
