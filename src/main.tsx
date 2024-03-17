import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components';
import './app.css'
import theme from '@theme/theme';
import {StyledContainer, StyledNavbar, StyledWidthContainer} from "@styles/GlobalStyles";
import TypingMessage from "./pages/Home/TypingMessage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StyledContainer backgroundColor={theme.backgroundColor} backgroundImage={theme.backgroundImage}>
                <StyledWidthContainer>
                    <StyledNavbar>
                        <h1>My Portfolio</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </StyledNavbar>
                    <TypingMessage/>
                </StyledWidthContainer>
            </StyledContainer>
        </ThemeProvider>
    </React.StrictMode>,
)
