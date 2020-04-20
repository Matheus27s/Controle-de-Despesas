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
        width: 64px;
        height: 64px;
    }

    div {
        width: 64px;
        height: 64px;
        background-color: grey;
        border-radius: 50%;
    }
    
`;