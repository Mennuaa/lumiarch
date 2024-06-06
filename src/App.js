import React, { createContext, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Loading from './components/loading/Loading';
export const ConfigContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const script = document.createElement('script');
        script.src = '/variables.js';
        script.onload = () => {
          setConfig(window.variables);
        };
        script.onerror = () => {
          console.error('Error loading variables.js');
        };
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error fetching variables:', error);
      }
    };

    fetchConfig();
  }, []);
  if (loading || !config) {
    return <Loading />;
  }
  console.log(window.variables);
  return (
          <ConfigContext.Provider value={config}>
          <Router>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />

          </Routes>
      </div>
    </Router>
    </ConfigContext.Provider>
  );
}

export default App;
