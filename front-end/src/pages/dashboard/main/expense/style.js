import styled from 'styled-components';   

export const ContainerExpense = styled.div`
    background-color: #ffff;
    grid-column: 1/2;
    grid-row: 1/3;
    display: grid;
    border-radius: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
    width: 100%;

`;

export const ExpenseList = styled.ul`

    display: flex;
    flex-direction: column;
    margin: 20px;
    
    li {
        list-style: none;
        height: 70px;
        background-color: #F8F9F8;
        width: 100%;
        margin-top: 10px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        padding: 10px;
        display: grid;
        flex-direction: column;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-content: center;
    }

`;