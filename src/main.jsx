import React, { StrictMode, useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Header from './header/header.jsx';
import Home from './body/Home.jsx';
import About from './body/About.jsx';
import Experience from './body/Experience.jsx';
import Projects from './body/Projects.jsx';
import Contact from './body/Contact.jsx';
import Footer from './footer/footer.jsx';
import './main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);

const App = () => {
    const [mode, setMode] = useState('light');

    const colorMode = {
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    };

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        // once: true,
    });

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
