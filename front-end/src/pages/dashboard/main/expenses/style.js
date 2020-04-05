import styled from 'styled-components';   

export const ContainerExpenses = styled.div`
    background-color: #ffff;
    grid-column: 1/2;
    grid-row: 1/3;
    display: grid;
    grid-template-rows: 90% 10%;
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

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;

    div {
        flex-direction: row;
        margin-left: 15px;

        p {
            color: #C4C4C4;
        }
    }
  
`;

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C4C4;
`;

export const ContainerRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        color: red;
    }
`;


export const AddExpense = styled.footer`
    background-color: #F7F7F7;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -2px 2px rgba(0,0,0,0.1);

    button {
        border: none;
        padding: 10px;
        background-color: #F7F7F7;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        transform: translateY(-5px);
    }
`;

export const LoginInput = styled.input`
    background-color: #C4C4C4;
    font-size: 18px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 2px
`;

export const Select = styled.select`
    background-color: #C4C4C4;
    font-size: 18px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 2px;
`;