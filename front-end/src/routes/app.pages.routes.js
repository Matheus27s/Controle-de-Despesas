import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { usePage } from '../context/page';

import Control from '../pages/dashboard/control';
import Move from '../pages/dashboard/move';
import Category from '../pages/dashboard/category';
import Recipe from '../pages/dashboard/recipe';

const AppPagesRoutes = () => {

    const { page } = usePage();
    
    switch ( page ) {
        case 'page01': return <BrowserRouter><Route component={ Control } /></BrowserRouter> 
        case 'page02': return <BrowserRouter><Route component={ Recipe } /></BrowserRouter> 
        case 'page03': return <BrowserRouter><Route component={ Move } /></BrowserRouter>
        case 'page04': return <BrowserRouter><Route component={ Category } /></BrowserRouter> 
        default      : return <BrowserRouter><Route component={ Control } /></BrowserRouter> 
    }
};

export default AppPagesRoutes;
