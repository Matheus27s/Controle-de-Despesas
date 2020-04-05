import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={ Login }/>
        <Route path="/register" component={ Register }/>
        <Route path="/dashboard/:id" component={ Dashboard }/>
    </BrowserRouter>
);

export default Routes;