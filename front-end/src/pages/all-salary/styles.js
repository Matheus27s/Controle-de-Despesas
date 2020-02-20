import styled from 'styled-components';

export const ContainerSalaries = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    button {

        margin: 10px auto;
        border: 0;
        border-radius: 3px;
        height: 48px;
        font-size: 16px;
        font-weight: bold;
        color: #ccc;
        cursor: pointer;
        transition: 0.5s;
        width: 400px;
    } 

    button:hover {
        color: #fff;
        background-color:  #B6CD41;
    }

`