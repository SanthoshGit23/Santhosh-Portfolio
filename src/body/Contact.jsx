import React from 'react'
import "./Contact.css"
import { useTheme } from "@mui/material/styles";
import ContactImg from "../assets/side-imgs/Contact.png"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
  const theme = useTheme();
  const iconStyles = {
    fontSize: "30px",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  };


  return (
    <>
      <div className="contact-container" id='contact'>
        <div className="contact">
          <h2 data-aos="fade-right">CONTACT</h2>
          <ol>
            <li data-aos="fade-right"><a href="tel:+91 9025651877"><PhoneAndroidIcon style={iconStyles} /></a>+91 9025651877</li>
            <li data-aos="fade-right"><a href="santhoshsaravanan52@gmail.com.com"><EmailIcon style={iconStyles} /></a>santhoshsaravanan52@gmail.com</li>
            <li data-aos="fade-right"><p><LocationOnIcon style={iconStyles} /></p>4/66-kulipirai,Thirumayam Tk,Pudukkottai Dt,TamilNadu,India -622402.</li>
          </ol>
        </div>
        <div className="contact-img" data-aos="zoom-in-left">
          <img src={ContactImg} alt="contact img" />
        </div>
      </div>
    </>
  )
}

export default Contact