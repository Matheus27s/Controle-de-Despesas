import React, { useState, useEffect } from 'react';

import { FiArrowUp } from 'react-icons/fi';
import { useSalary } from '../../../../context/Salary';

import { 
    ContainerExpenses, 
    AddExpense, 
    ExpenseList,
    LoginInput,
    ContainerLeft,
    ContainerCenter,
    ContainerRight,
    Select 
} from './style';

export default function Expenses() {

    const { salary, setSalary } = useSalary();
    const [ expenses, setExpenses ] = useState();

    useEffect(() => {
        showExpenses();
    }, [salary]);

    function showExpenses() {
    }
    

    return(

        <ContainerExpenses>

            <ExpenseList>

                    <li>
                        <ContainerLeft>
                            <div>
                                <p></p>
                            </div>
                        </ContainerLeft>

                        <ContainerCenter>
                        </ContainerCenter>

                        <ContainerRight>
                            Right
                        </ContainerRight>
                    </li>

            </ExpenseList>

            <AddExpense>

                <form>

                    <LoginInput />

                    <LoginInput />

                    <LoginInput />

                    <Select></Select>

                    <button type="submit">
                        <FiArrowUp size={ 25 } color="#48887B"/>
                    </button>

                </form>

            </AddExpense>

            </ContainerExpenses>

    );

}
