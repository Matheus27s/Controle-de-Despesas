import styled from 'styled-components';

export const ContainerSideBar = styled.div`
    background-color: #29B573;
    grid-column: 1/2;
    grid-row: 2/3;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: 40px;
    }

    li {
        padding: 16px;
        width: 100%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    li:hover {
        background-color: rgba( 72, 136, 123, 0.1 );
    }
`;
