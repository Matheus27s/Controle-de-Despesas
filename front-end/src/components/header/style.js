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

    div {
        width: 56px;
        height: 56px;
        background-color: grey;
        border-radius: 50%;
    }

`;
