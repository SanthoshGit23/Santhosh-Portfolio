import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../main';
import "../header/header.css";

const Header = () => {
    const { toggleColorMode } = useColorMode();
    const theme = useTheme();

    return (
        <header>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <li><IconButton onClick={toggleColorMode} color="inherit" style={{ marginLeft: 'auto', color:"white"}}>
                {theme.palette.mode === 'dark' ? <LightModeIcon /> :  <DarkModeIcon />}
            </IconButton></li>
        </header>
    );
};

export default Header;
