import styled from 'styled-components';

interface ContainerProps {
    backgroundColor?: string;
    backgroundImage?: string;
}

const StyledNavbar = styled.nav<ContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${props => props.backgroundColor};
    color: #FFBBA6;
    position: absolute;
    width: 80%;
    right: 50%;
    top: 1vh;
    border-radius: 15px;
    transform: translate(50%, 0);
    
    ul {
        display: flex;
        gap: 5px;
    }
`;

StyledNavbar.defaultProps = {
    backgroundColor: '#162114'
};

const StyledContainer = styled.div<ContainerProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
`;

const StyledWidthContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledParagraph = styled.p`
    font-size: 1.5rem;
    color: #FFBBA6;
`;

export {StyledNavbar};
export {StyledContainer};
export {StyledWidthContainer};
export {StyledParagraph};