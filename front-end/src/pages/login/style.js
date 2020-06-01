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
  background-color: #48887B;
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

    h2 {
        text-align: center;
        font-size: 24px;
        color: #29B573;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        margin: 0 auto;        
    }
`;

export const ContainerOption = styled.div`

display: flex;
    flex-direction: row;
    width: 40%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;

    p {
        color: #29B573;
        font-size: 16px;
        font-weight: bold
    }

    a {
        color: #29B573;
        text-decoration: none;
        font-size: 24px;
        font-weight: bold
    }
`;

