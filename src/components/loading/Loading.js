import React, { useEffect, useState } from 'react'
import './Loading.css'
export default function Loading() {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-percentage">{progress}%</div>

      <div className="loading-circle">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring__background"
            stroke="#5584FF"
            strokeWidth="10"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring__circle"
            stroke="white"
            strokeWidth="10"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
            style={{ strokeDasharray: 314, strokeDashoffset: 314 - (314 * progress) / 100 }}
          />
        </svg>
        <div className="loading-logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
}
