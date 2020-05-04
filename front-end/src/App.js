import React from 'react';
import './App.css';

import Routes from './routes';

import { AuthProvider } from './context/auth';

const App = () => {
  return (
    <div className="App">
          <AuthProvider>
            <Routes />
          </AuthProvider>
    </div>
  );
}

export default App;
