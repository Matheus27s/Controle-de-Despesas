import styled from 'styled-components';

export const Title = styled.h1`
    color: red;

    font-size: ${ props =>  `${ props.fontSize }px`};
/*  - Função que recebe todas as 'props' do meu componente como parametro*/

    background-color: black;

    span {
        font-size: 16px
    }
`;

export const TitleSmall = styled(Title)`
    color: #00f;
    font-size: 16px;
`;

export const LoginContainer = styled.div`

  display: flex;
  justify-content: center; 
  align-items: center;
  background-color: #00A859;
  width: 100%;
  height: 603px;

`;

export const LoginForm = styled.form`

    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 300px;

    img {
        width: 100px;
        height: 150px;
        margin: 0 auto;
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

`;

export const LoginInput = styled.input`

    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: #666;

    :placeholder {
        color:#999;
    }

`;

