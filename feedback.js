import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="feedback">
      <h2>Feedback and Support</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
