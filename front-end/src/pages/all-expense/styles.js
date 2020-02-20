import styled from 'styled-components';

export const ContainerExpenses = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center; /*Alinha horizontalmente*/
    align-items: center; /*Alinha verticalmente*/
    width: 100%;
    height: 100%;

`

export const ExpensesUl = styled.ul`

    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Duas colunas */
    gap: 10px; /* Espaçamento */
    list-style: none;
    padding: 12px;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;

`

export const ExpensesLi = styled.li`

    background-color: #FFF;
    border-radius: 2px;
    height: 170px;
    margin: 0 auto;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);

    header {

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-bottom: 1px solid rgba(0,0,0,0.1);
        padding: 10px;

    }

    header h3 {

        text-align: left;
        font-size: 25px;

    }

    header button {

        border: none;
        margin-left: 85%;
        cursor: pointer;
        color: #ccc;
        border-radius: 50%;
        max-width: 35px;
    
    }

    header button:hover {

        color: #fff;
        font-weight: bolder;
    
    }

    article {

        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    article img {

        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eeeded;
        padding: 5px;

    } 

    article button {

        padding: 10px;
        border-radius: 50%;
        background-color: red;
        cursor: pointer;

    }

    article button:hover {

        background-color:blue;
        color: #fff;

    }

    footer {

        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 90%; /* Espaçamento */
        font-size: 18px;
        font-weight: bold;
        padding: 5px;
        border-top: 1px solid rgba(0,0,0,0.1);
        background-color: #B6CD41;
        color: #fff;

    }

    footer strong {

        color: green;

    }

    @media( max-width: 800px ) {

        footer {
            gap: 40%;
        }
    }                                                                   

`