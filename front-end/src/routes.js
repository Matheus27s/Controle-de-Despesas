import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
        <Route path="/dashboard/:id" component={ Dashboard }/>
        <Route path="/recipes" component={ AddRecipe }/>
        <Route path="/moves" component={ AddMove }/>
        <Route path="/categories" component={ AddCategory }/>


    </BrowserRouter>
);

export default Routes;