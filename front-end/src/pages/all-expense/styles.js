import styled from 'styled-components';

export const ContainerExpenses = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 50px;

`

export const ExpensesUl = styled.ul`

    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    gap: 10px;
    list-style: none;
    padding: 12px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 50px;

`

export const ExpensesLi = styled.li`

    background-color: #FFF;
    border-radius: 5px;
    margin: 0 auto;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-top: 10px;

    header {

        width: 100%;
        display: inline-grid;
        grid-template-columns: 95% 5%;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        padding: 10px;

    }

    header button {

        border: none;
        cursor: pointer;
        color: rgba(0,0,0,0.1);
        background-color: #fff;
        font-size: 17px;
        font-weight: bold;
    }

    header button:hover {

        color: red;
        font-weight: bolder;
        background-color: rgba(0,0,0,0.1);
        border-radius: 10%;

    }

    article {

        width: 100%;
        display: inline-grid;
        grid-template-columns: 10% 12% 60% 18%;
        align-items: center;
        text-align: center;
        padding: 10px;
        color: 666;

    }

    article img {

        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eeeded;
        padding: 5px;
        margin: 0 auto;
    } 

    article button {

        padding: 10px;
        border-radius: 50%;
        background-color: red;
        cursor: pointer;

    }

    article h4 {
        color: red;
    }

    article button:hover {

        background-color:blue;
        color: #fff;

    }

    footer {

        width: 100%;
        display: inline-grid;
        grid-template-columns: 1fr 1fr 1fr;
        font-size: 18px;
        font-weight: bold;
        padding: 5px 20px;
        background-color: #eeeded;
        color: #666;
        text-align: center;
        border-bottom: 5px;
        gap: 40%;


    }

    footer strong {
        color: green;
    }

    footer p { 
        color: green;
    }
    
`