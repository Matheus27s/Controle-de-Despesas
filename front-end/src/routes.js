import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RecipeProvider from './context/Recipe';
import UserProvider from './context/User'

import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import AddMove from './pages/move';
import AddRecipe from './pages/recipe';
import AddCategory from './pages/category';


const Routes = () => (

    <BrowserRouter>
        <Route exact path="/" component={ Login }/>
        <Route path="/register" component={ Register }/>

        <UserProvider>
            <RecipeProvider>
                <Route path="/dashboard/:id" component={ Dashboard }/>
                <Route path="/recipes" component={ AddRecipe }/>
                <Route path="/moves" component={ AddMove }/>
                <Route path="/categories" component={ AddCategory }/>
            </RecipeProvider>
        </UserProvider>
    </BrowserRouter>
    
);

export default Routes;