import React from "react";
import { styled } from "@mui/material";
import background_img from "../components/Images/background.jpg";
import { useNavigate } from "react-router-dom";

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${background_img});
    background-size: cover;
    background-position: center;
    position: relative;
`;

const Overlay = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
`;

const Content = styled('div')`
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 2rem;
    color: white;
    text-align: center;
`;

const Title = styled('h1')`
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Text = styled('p')`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`;

const Button = styled('button')`
    padding: 12px 30px;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #45a049;
    }
`;

const Home = () => {
    const navigate = useNavigate();
    const handleButton=()=>{
        navigate('/playquiz');
    }

    return (
        <Container>
            <Overlay />
            <Content>
                <Title>Why Quizzes Matter</Title>
                <Text>
                    Quizzes are powerful tools for learning and assessment. They help reinforce knowledge, 
                    identify gaps in understanding, and make learning interactive and engaging. 
                    Regular quizzes can improve retention by up to 50% compared to passive learning methods.
                </Text>
                <Text>
                    Whether you're a student preparing for exams or a teacher assessing your class, 
                    quizzes provide valuable feedback and motivation to keep learning.
                </Text>
                <Button onClick={handleButton}>Start Quizzing Now</Button>
            </Content>
        </Container>
    );
}

export default Home;
