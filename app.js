import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './components/onboarding.js';
import Assessment from './components/Assessment.js';
import LearningPath from './components/LearningPath';
import RealTimeMonitoring from './components/RealTimeMonitoring';
import Feedback from './components/feedback.js';
import './app.css';

const App = () => {
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [isAssessmentComplete, setAssessmentComplete] = useState(false);
  const [learningPath, setLearningPath] = useState([]);

  const handleOnboardingComplete = () => setOnboardingComplete(true);
  const handleAssessmentComplete = () => {
    setAssessmentComplete(true);
    // Mock personalized learning path
    setLearningPath(['Module 1', 'Module 2', 'Module 3']);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            {!isOnboardingComplete ? (
              <Onboarding onComplete={handleOnboardingComplete} />
            ) : !isAssessmentComplete ? (
              <Assessment onComplete={handleAssessmentComplete} />
            ) : (
              <LearningPath learningPath={learningPath} />
            )}
          </Route>
          <Route path="/monitoring" component={RealTimeMonitoring} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
