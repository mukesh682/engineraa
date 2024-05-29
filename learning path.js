import React from 'react';

const LearningPath = ({ learningPath }) => {
  return (
    <div className="learning-path">
      <h2>Your Learning Path</h2>
      <ul>
        {learningPath.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningPath;
