import React from 'react';
import { useColorMode } from '../main';
//CSS links
import "./Home.css";
import 'aos/dist/aos.css';

//MUI Links
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

//Assets Links
import profile from "../assets/my-img/Santhosh.jpg";
import Instagram from "../assets/icons/instagram.svg";
import Resume from "../assets/my-img//Santhosh Web Developer.pdf";

const Home = () => {
    useColorMode();
    const theme = useTheme();
    const imgBoxShadow = {
        boxShadow: theme.palette.mode === "dark"
            ? "3px 3px 20px rgb(146, 143, 143)"
            : "8px 8px 20px rgb(40, 39, 39)",
    };
    return (
        <>
            <div className='Home-container' id='home'>
                <div className='Details-container'>
                    <h1 id='name'><b>Santhosh Saravanan</b></h1>
                    <p id='role'>Web Developer</p>
                    <div className="objective-container">
                        <h2 className='obj-title'>Objective </h2>
                        <p className='obj-para'> A Motivated Front-end developer skilled in Web development with
                            expertise in React, Node.js, and JavaScript. Builds
                            responsive web interfaces and scalable applications, delivering
                            high-quality, end-to-end solutions collaboratively.</p>
                        <div className='cv-down'>
                            <Button
                                variant="contained"
                                color="warning"
                                startIcon={<FileDownloadIcon />}
                                href={Resume}
                                download="Santhosh Web Developer.pdf"
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='Image-container' data-aos="zoom-in-down">
                    <img id='profile' src={profile} alt='profile' style={imgBoxShadow} />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/santhosh-saravanan-685483270/" className='linked-in' target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ color: '#287fc7', fontSize: "40px" }} /></a>
                        <a href="https://github.com/SanthoshGit23" className='github' target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', fontSize: "40px" }} /></a>
                        <a href="" className='instagram'><img src={Instagram} alt="insta-logo" style={{ height: "40px", width: "40px" }} target="_blank" rel="noopener noreferrer" /></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home