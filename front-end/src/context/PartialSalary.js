import React, { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const PartialSalaryContext = createContext();

export default function PartialSalaryProvider({children}) {

    const [ partialSalary, setPartialSalary ] = useState(0);

    return (
        <PartialSalaryContext.Provider value={{ partialSalary, setPartialSalary }}>
            { children }
        </PartialSalaryContext.Provider>
    );

}

export function usePartialSalary() {
    const context = useContext(PartialSalaryContext);
    const { partialSalary, setPartialSalary } = context;
    return { partialSalary, setPartialSalary };
}