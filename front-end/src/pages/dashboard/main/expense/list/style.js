import styled from 'styled-components';  

export const Overflow = styled.div`
    overflow: auto;
    margin-top: 5px;

    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ccc; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: red; 
    }
`;


export const ExpenseList = styled.ul`

    display: flex;
    flex-direction: column;
    margin: 20px;

    li {
        list-style: none;
        height: 70px;
        background-color: #F8F9F8;
        width: 100%;
        margin-top: 10px;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
        padding: 10px;
        display: grid;
        flex-direction: column;
        grid-template-columns: 3fr 3fr 3fr;
        align-items: center;
        justify-content: center;
    }

`;

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: initial;

    div {
        flex-direction: row;
        margin-left: 15px;

        p {
            color: #C4C4C4;
        }

        strong {
            color: grey;
        }
    }
  
`;

export const ContainerCenter = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    color: #C4C4C4;
`;

export const ContainerRight = styled.div`

    display: flex;
    justify-content: space-between;

    strong {
        color: red;
    }
`;