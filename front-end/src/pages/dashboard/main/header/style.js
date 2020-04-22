import styled from 'styled-components';

export const Overflow = styled.div`
    max-width: 900px;
    overflow: auto;
    margin: 0 auto;

    ::-webkit-scrollbar {
        height: 2px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #ccc; 
    }
`;

export const ContainerHeader = styled.header`

    grid-column: 1/3;
    grid-row: 1/2;
    
    display: flex;
    width: 100%;
    align-items: center;
    background-color: #FFF;
    overflow: overlay;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3); 
    border-radius: 12px;

    div ul {
        display: flex;
        flex-direction: row;
    }

    div ul li {
        list-style: none;
        margin: 0 50px;
        text-decoration: none;
        font-size: 24px;
        color: #c4c4c4;
        transition-duration: 0.2s;
    }

    div ul li:hover {
        font-size: 25px;
        color: #656363;
    }
    
`;