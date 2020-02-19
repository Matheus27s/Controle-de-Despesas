import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';

import AllSalary from './pages/all-salary';
import AddSalary from './pages/add-salary';
import StateSalary from './pages/status-salary'

import AllExpense from './pages/all-expense';
import AddExpense from './pages/add-expense';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={ Login }/>

        <Route path="/users/:id" component = { AllSalary }/>
        <Route path="/salary/:id" component = { AddSalary } />

        <Route path="/state-salary/:id" component = { StateSalary } />

        <Route path="/salaries/:id" component = { AllExpense } />
        <Route path="/add-expense/:id" component = { AddExpense } />
    </BrowserRouter>
);

export default Routes;