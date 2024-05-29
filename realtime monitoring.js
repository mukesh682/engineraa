import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RealTimeMonitoring = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/progress');
      setProgress(result.data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-monitoring">
      <h2>Real-Time Monitoring</h2>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeMonitoring;
