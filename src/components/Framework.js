import React, { useState } from 'react'
import style from './Framework.module.scss';
import Navbar from './Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';

import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";


export default function Framework() {
    let [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
    }

    return (
        <Box className={darkMode ? style.dark : style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleClick} />
                </Grid>

                <Grid item flexGrow={1}>
                    <Routes>
                        <Route exact path={'/'} element={<Home />} />
                        <Route exact path={'/about'} element={<About />} />
                        {/*<Route exact path={'/portfolio'} element={<Portfolio/>}/>*/}
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>&copy; Copyright 2022</p>
                        <p>Built with &hearts; by <a href={'https://www.linkedin.com/in/fionabfeng'}>Fiona Feng</a></p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
