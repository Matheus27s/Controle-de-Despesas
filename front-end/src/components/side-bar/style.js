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
            cursor: pointer;
            border-radius: 5px;
            transition-duration: 0.2s;

            a {
                color: rgba(0,0,0,0.1);
                width: 100%;
                padding: 12px 10px 10px 10px;
            }

        }

        li:hover {
            background-color: #48887B;

            a:hover {
                color: #29B573;
            }
        }
    }
`;
