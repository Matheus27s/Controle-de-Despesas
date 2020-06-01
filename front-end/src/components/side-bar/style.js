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

        li {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            transition-duration: 0.2s;

            button {
                color: rgba(0,0,0,0.1);
                width: 100%;
                padding: 12px 10px 10px 10px;
                cursor: pointer;
                background-color: #29B573;
                border: none;

            }

        }

        li:hover {
            background-color: #48887B;

            button:hover {
                color: #29B573;
                background-color: #48887B;

            }
        }
    }
`;
