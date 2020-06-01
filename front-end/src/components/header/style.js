import styled from 'styled-components';

export const ContainerHeader = styled.header`

    grid-column: 1/3;
    grid-row: 1/2;
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: #48887B;
    padding: 4px 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    img {
        width: 65px;
        height: 56px;
    } 
`;

export const ContainerUser = styled.div`

    display: flex;
    padding: 2px;
    align-items: center;
    justify-content: space-between;

    strong {
        color: #FFF;
        margin-right: 10px;
    }

    button {
        border: none;
        background-color: #29B573;
        border-radius: 50%;
        position: relative;
        padding: 6px 6px 6px 8px;
        left: -16px;
        top: 16px;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
        cursor: pointer
    }

    div {
        width: 56px;
        height: 56px;
        background-color: #29B573;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.1);

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%
        }
    }

`;
