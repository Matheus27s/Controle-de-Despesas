import styled from 'styled-components';

export const ContainerLogin = styled.div`

  display: flex;
  justify-content: space-between; 
  align-items: center;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;/* cobre a altura toda do corpo*/
`;

export const ContainerLeft = styled.div`

    display: flex;
    flex-direction: column;
    border-right: 2px solid #29B573;
    flex: 2;


    p {
        font-size: 24px;
        font-weight: bold;
        color: #FFF;
    }

`;


export const ContainerRight = styled.div`

    @keyframes show-login {
        0% {
            transform: translateY(0px);
            opacity: 0.1;        
        }

        25% {
            transform: translateY(-10px);
            opacity: 0.2;
        }
    }

    animation: show-login 1s ease-in-out forwards; 
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 15px;

    h2 {
        text-align: center;
        font-size: 36px;
        color: #29B573;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    button {
        width: 179.98px;
        font-size: 16px;
        font-weight: bold;
        background-color: #29B573;
        border: none;
        height: 34px;
        border-radius: 5px;
        margin-top: 10px;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    button:hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 2px #25443D;
    }

`;

export const LoginInput = styled.input`
    background-color: #FFF;
    font-size: 16px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    padding-left: 16px;
`;

export const ContainerRegister = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 179.98px;

    p {
        font-size: 24px;
        color: #29B573;
    }
`;

export const ContainerAdress = styled.div`
    
    display: flex;
    flex-direction: column;
`;

