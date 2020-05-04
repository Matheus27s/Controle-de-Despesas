import styled from 'styled-components';

export const Overflow = styled.div`
    max-width: 900px;
    overflow-x: auto;
    margin: 0 auto;
    white-space: nowrap;
`;

export const ContainerHeader = styled.header`

    grid-column: 1/3;
    grid-row: 1/2;
    
    display: flex;
    width: 100%;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3); 
    border-radius: 12px;

    div ul {
        display: flex;
        flex-direction: row;
    }

    div ul li {
        width: 100%;
        list-style: none;   
        padding: 0 36px;
        text-decoration: none;
        font-size: 24px;
        transition-duration: 0.4s;
        cursor: pointer;
        color: #3333;   
    }

    div ul li:hover {
        background-color: rgba(200,200,200,0.1);
        color: #666;
    }
    
`;