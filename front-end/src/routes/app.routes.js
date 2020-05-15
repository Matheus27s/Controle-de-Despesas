import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

const AppRoutes = () => (
    <BrowserRouter>
        <Route exact path="/" component={ Dashboard }/>
    </BrowserRouter>
);

export default AppRoutes;