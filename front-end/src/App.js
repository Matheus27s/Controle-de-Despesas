import React from 'react';
import './App.css';

import SalaryProvider from './context/Salary';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <SalaryProvider>
          <Routes />
      </SalaryProvider>
    </div>
  );
}

export default App;
