import React, { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const SalaryContext = createContext();

export default function SalaryProvider({children}) {

    const [ salary, setSalary ] = useState({});

    return (
        <SalaryContext.Provider value={{ salary, setSalary }}>
            { children }
        </SalaryContext.Provider>
    );

}

export function useSalary() {
    const context = useContext(SalaryContext);
    const { salary, setSalary } = context;
    return { salary, setSalary };
}