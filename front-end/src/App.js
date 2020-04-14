import React from 'react';
import './App.css';

import UserProvider from './context/User';

import Routes from './routes';
import SalaryProvider from './context/Salary';

function App() {
  return (
    <div className="App">
      <UserProvider>
          <SalaryProvider>
            <Routes />
          </SalaryProvider>
      </UserProvider>
    </div>
  );
}

export default App;
