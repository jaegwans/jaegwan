import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

function Home() {
    return (
        <StyledHome>
            <h2>jaegwan.com</h2>
            <StyledLink href="https://blog.jaegwan.com">blog</StyledLink>
            <StyledLink href="https://github.com/jaegwans">github</StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1D5oPFkMqpe1dYCPoW6LAHp9gBBHgHQtdWg11ADhVP1A/edit?usp=sharing">
                resume
            </StyledLink>
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    height: 100vh;
    margin-top: 3rem;
    a {
        text-decoration: none;
    }
`;

const StyledLink = styled.a`
    color: #5a5a5a;
    font-size: 2rem;

    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
        color: #000000;
        transform: translateY(-0.5rem);
    }
`;
