//Formulário
import styled from 'styled-components';

const getStyledButton = type => {

    if( type === "submit" ) {
        return `
            background-color:#B6CD41;
            margin-top: 15px;
            border: 0;
            border-radius: 3px;
            height: 48px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
        `;
    }

    if( type === "error" ) {
        return `
            background-color: #ccc;
            margin-top: 15px;
            border: 0;
            border-radius: 3px;
            height: 48px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
        `;
    }
}


export const ContainerForm = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center; /*Alinha horizontalmente*/
  align-items: center; /*Alinha verticalmente*/
  width: 100%;
  height: 100%;

`

export const FormUl = styled.div`

    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Duas colunas */
    gap: 20px; /* Espaçamento */
    list-style: none;
    padding: 12px;
    background-color: #fff;
    height: 495px;
    margin: 10px;

`

export const Form = styled.form`

    width: 400px;
    display: flex;
    flex-direction: column;

    input[type="text"] {

        padding: 20px;
        font-size: 16px;
        color: #666;
        border: none;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        width: 100%;
    }

    input::placeholder {
        color:#999;
    }

`

export const Button = styled.button`
    ${({ type }) => getStyledButton(type)}
`