import styled from 'styled-components';

export const CategoryContainer = styled.div`
    background-color: #F8F9F8;
    display: grid;
    grid-template-rows: 10fr 80fr;
    gap: 10px;
    margin: 10px;
`;

export const CategoryForm = styled.div`
    border-radius: 12px;
    padding: 16px;
    background-color: #F8F9F8;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.3); 

    @keyframes show-login {
        0% {
            transform: translateY(0px);
            opacity: 0.1;        
        }

        25% {
            transform: translateY(-10px);
            opacity: 0.2;
        }
    }

    form {
        animation: show-login 1s ease-in-out forwards;
        display: flex;
        flex-direction: column;
        width: 30%;
        margin: 0 auto;

        input {
            width: 100%;
            background-color: #FFFF;
            font-size: 18px;
            height: 34px;
            border-radius: 5px;
            border: none;
            padding: 0 10px;
            margin: 8px 0px;
        }

        button {
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            background-color: #29B573;
            border: none;
            height: 34px;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
            transition-duration: 0.2s;
            color: rgba(0,0,0,0.4);
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0px 5px 2px #25443D;
            color: #FFFF;
        }
    }
`;

export const CategoryInput = styled.input`
    background-color: #FFFF;
    font-size: 18px;
    width: 100%;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 8px 0px;
`;

export const Select = styled.select`
    background-color: #FFFF;
    font-size: 18px;
    width: 100%;
    height: 34px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    margin: 8px 0px;

    option {
        background-color: #FFF;
    }
`;