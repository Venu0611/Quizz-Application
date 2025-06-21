import React from 'react';
import { useLocation } from 'react-router-dom';

const Resulted = () => {
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', color: 'black' }}>
      <h1>Quiz Result</h1>
      <h2>
        You scored {score} out of {totalQuestions}
      </h2>
      <p>
        {score / totalQuestions >= 0.5 ? "Congratulations! You passed!" : "Better luck next time!"}
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default Resulted;