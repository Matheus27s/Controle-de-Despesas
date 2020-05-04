import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

const AppRoutes = () => (
    <BrowserRouter>
        <Route exact path="/" component={ Dashboard }/>
    </BrowserRouter>
);

export default AppRoutes;

        /*<Route path="/recipes" component={ AddRecipe }/>
        <Route path="/moves" component={ AddMove }/>
        <Route path="/categories" component={ AddCategory }/>*/