import styled from 'styled-components';   

export const AddExpense = styled.footer`
    background-color: #F7F7F7;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -2px 2px rgba(0,0,0,0.1);

    input {
        background-color: rgba(0,0,0,0.1);
        font-size: 18px;
        width: 179.98px;
        height: 34px;
        border-radius: 5px;
        border: none;
        padding: 0 10px;
        margin: 2px
    }

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
    background-color: rgba(0,0,0,0.1);
    font-size: 18px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 2px
`;

export const Select = styled.select`
    background-color: rgba(0,0,0,0.1);
    font-size: 18px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 2px;

    option {
        background-color: #FFF;
    }
`;