import React, { useState } from "react";
import { styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Selecting = styled('select')({
  width: "100%",
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '1%',
  margin: '1',
  marginTop: '20px',
  fontSize: '2rem',
  backgroundImage: 'red'
});

const PlayQuiz = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    switch (e.target.value) {
      case '1':
        navigate("/login");
        break;
      case '2':
        navigate("/login");
        break;
      case '3':
        navigate("/");
        break;
      default:
        break; // handle default case if needed
    }
  };

  return (
    <div>
      <Selecting value={selectedOption} onChange={handleSelectChange}>
        <option value="" disabled>Open this select menu</option>
        <option value="1">Login</option>
        <option value="2">Play</option>
        <option value="3">View-Alluser</option>
      </Selecting>
    </div>
  );
};

export default PlayQuiz;