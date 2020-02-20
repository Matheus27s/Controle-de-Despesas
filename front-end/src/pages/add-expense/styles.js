import styled from 'styled-components';


export const ContainerExpense = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center; /*Alinha horizontalmente*/
  align-items: center; /*Alinha verticalmente*/
  width: 100%;
  height: 100%;

`

export const ExpenseUl = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Duas colunas */
    gap: 20px; /* Espaçamento */
    list-style: none;
    padding: 12px;
    background-color: #fff;
    height: 495px;
    margin: 10px;

`

export const ExpenseForm = styled.form`

    width: 400px;
    display: flex;
    flex-direction: column;

    input[type="text"] {

        border: 1px solid #ddd;
        height: 48px;
        padding: 0 20px;
        font-size: 16px;
        color: #666;
        border: none;
        border-bottom: 2px solid rgba(0,0,0,0.1);
    }

    input::placeholder {
        color:#999;
    }

    button {

        margin-top: 15px;
        border: 0;
        border-radius: 3px;
        height: 48px;
        font-size: 16px;
        background-color:#B6CD41;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }

`