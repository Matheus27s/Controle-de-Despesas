import styled from 'styled-components';

export const ContainerDashboard = styled.div`
    background-color: #F8F9F8;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 7vh 86vh 7vh;
`;

export const Header = styled.header`
    
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

    div ul li a{
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
        color: #c4c4c4;
        transition-duration: 0.2s;
    }

    div ul li a:hover {
        font-size: 32px;
        color: #656363;
    }
    
`;

export const Article = styled.article`

    max-width: 1260px;
    width: 100%;
    background-color: #F8F9F8;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    padding: 20px;
`;

export const ContainerExpenses = styled.div`
    background-color: #ffff;
    grid-column: 1/2;
    grid-row: 1/3;
    display: grid;
    grid-template-rows: 90% 10%;
    border-radius: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    li div {
        display: flex;
        flex-direction: column;
    }

    li h2 {
        color: #C4C4C4;
    }

    li p {
        color: #C4C4C4;
        font-weight: bold;
    }
`;

export const AddExpense = styled.footer`
    background-color: #F7F7F7;
    border-radius: 0 0 15px 15px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -2px 2px rgba(0,0,0,0.1);

    button {
        border: none;
        padding: 10px;
        background-color: #F7F7F7;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        transform: translateY(-5px);
    }
`;

export const StatusPie = styled.div`
    background-color: #48887B;
    grid-column: 2/3;
    border-radius: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        flex: 1;
    }
`;

export const StatusProgress = styled.div`
    background-color: #29B573;
    grid-column: 2/3;
    border-radius: 10px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;

    div {
        flex: 1;
    }
`;

export const Footer = styled.footer`
    background-color: #48887B;
    box-shadow: 0px -3px 3px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    

    div {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;

export const LoginInput = styled.input`
    background-color: #FFF;
    font-size: 18px;
    width: 179.98px;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 10px;
`;
