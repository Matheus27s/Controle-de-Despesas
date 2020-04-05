import styled from 'styled-components';

export const ContainerHeader = styled.header`
    
    display: flex;
    width: 100%;
    background-color: red;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
    margin-bottom: 5px;

    div ul {
        display: flex;
        flex-direction: row;
    }

    div ul li {
        list-style: none;
        margin: 0 50px;
    }

    div ul li {
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
        color: #c4c4c4;
        transition-duration: 0.2s;
    }

    div ul li:hover {
        font-size: 32px;
        color: #656363;
    }
    
`;