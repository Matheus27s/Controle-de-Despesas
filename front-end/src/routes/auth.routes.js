import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';

const AuthRoutes = () => (
     <BrowserRouter>
        <Route exact path="/" component={ Login }/>
        <Route path="/register" component={ Register }/>
    </BrowserRouter>
);

 export default AuthRoutes;