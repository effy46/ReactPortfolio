import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import style from './Navbar.module.scss';



import Mode from "../pages/Home/Mode";

import { Box } from "@mui/material";
import { info } from "../../info/info";


const links = [

    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: `${info.firstName} ${info.lastName}`,
        type: 'name',
        to: '/',
        active: 'home'
    },

    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]


export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));


    return (
        <Box component={'nav'} >
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && style.active}
                        sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Mode darkMode={darkMode} handleClick={handleClick} />
                </li>
                <button className="burger-menu" id="burger-menu">
                    <ion-icon className="bars" name="menu-outline"></ion-icon>
                </button>
            </Box>
        </Box>
    )
}