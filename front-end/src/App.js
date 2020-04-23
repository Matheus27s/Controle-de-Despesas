import React from 'react';
import './App.css';

import UserProvider from './context/User';

import Routes from './routes';
import RecipeProvider from './context/Recipe';

function App() {
  return (
    <div className="App">
      <UserProvider>
          <RecipeProvider>
            <Routes />
          </RecipeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
