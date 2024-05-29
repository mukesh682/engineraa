import React, { useState } from 'react';

const Assessment = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="assessment">
      <h2>Initial Assessment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Question 1:
          <input type="text" name="q1" onChange={handleChange} required />
        </label>
        <label>
          Question 2:
          <input type="text" name="q2" onChange={handleChange} required />
        </label>
        <button type="submit">Submit Assessment</button>
      </form>
    </div>
  );
};

export default Assessment;
