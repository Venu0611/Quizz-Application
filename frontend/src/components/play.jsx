import React, { useState, useRef } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import data from '../database/data.json';
import { updateUser } from "./services/Api"; // Ensure your Api.js file exports an update function

const QuizTabel = styled('div')({
  border: '1px solid black',
  textAlign: "center", 
  backgroundColor: "black",
  color: "white",
  width: '50%',
  margin: 'auto',
  borderRadius:'5%',
  padding:'3%',
  marginTop:"2%",
  
  '& ul li':{
    display:'flex',
    justifyContent:'center', 
    height:'40px',
    paddingLeft:'4px',
    border:'1px solid',
    borderRadius:'8px',
    marginBottom:'20px',
    fontSize:'20px',
    cursor:'pointer',
  },
  '& button': {
    margin:'auto',
    width:'250px',
    height:'50px',
    borderRadius:'8px',
    backgroundColor:'gray',
    color:'black',
  },
  'li.correct':{
    background:'green',
    borderColor:'darkgreen',
  },
  'li.wrong':{
    background:'red',
    borderColor:'darkred',
  }
});

const Play = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[0]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const Option_Array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        Option_Array[question.ans - 1].current.classList.add('correct');
      }
    }
  };

  const next = async () => {
    if (lock) {
      if (index === data.length - 1) {
        // Calculate the final total score
        const finalScore = score; 

        try {
          // Retrieve the logged-in user data from localStorage
          const loggedInUser = JSON.parse(localStorage.getItem("user"));
          
          if (loggedInUser && loggedInUser.id) {
            // Append the new score data to the existing user profile payload
            const updatedProfile = { ...loggedInUser, score: finalScore };
            
            // Save to database via PUT http://localhost:9092/customer/{id}
            await updateUser(loggedInUser.id, updatedProfile);
            
            // Update local storage tracking so it matches database state
            localStorage.setItem("user", JSON.stringify(updatedProfile));
          }
        } catch (error) {
          console.error("Failed to save user score to backend:", error);
        }

        // Navigate to results view
        navigate('/resulting', { state: { score: finalScore, totalQuestions: data.length } });
      } else {
        setIndex(index + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        Option_Array.forEach(option => {
          option.current.classList.remove('wrong');
          option.current.classList.remove('correct');
        });
      }
    }
  };

  return (
    <QuizTabel>
      <h1>Welcome to Quiz</h1>
      <hr />
      <h4>{index + 1}. {question.question}</h4>
      <ul>
        <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
        <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
        <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
        <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
      </ul>
      <button onClick={next}>Next</button>
      <p>{index + 1} to {data.length} pages</p>
    </QuizTabel>
  );
};

export default Play;