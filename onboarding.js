import React, { useState } from 'react';

const Onboarding = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="onboarding">
      <h2>Welcome to Enginera</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Get Started</button>
      </form>
    </div>
  );
};

export default Onboarding;
