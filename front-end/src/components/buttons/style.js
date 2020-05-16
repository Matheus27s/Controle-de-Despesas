import styled from 'styled-components';

export const Button = styled.button`

    font-size: 16px;
    font-weight: bold;
    background-color: #29B573;
    border: none;
    height: 34px;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 0.2s;
    color: rgba(0,0,0,0.4);
    margin: 8px 0px;

    :hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 2px #25443D;
        color: #FFFF;
    }
`;