import styled from 'styled-components';

export const ContainerSalary = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

`

export const SalaryUl = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Duas colunas */
    gap: 20px; /* Espaçamento */
    list-style: none;
    padding: 12px;
    background-color: #fff;
    height: 495px;
    margin: 10px;
`

export const SalaryForm = styled.form`

    width: 400px;
    display: flex;
    flex-direction: column;

    input {

        margin-top: 20px;
        border: 1px solid #ddd;
        height: 48px;
        padding: 0 20px;
        font-size: 16px;
        color: #666;
        border: none;
        border-bottom: 2px solid rgba(0,0,0,0.1);

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