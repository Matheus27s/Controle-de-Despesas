import styled from 'styled-components';

export const Headers = styled.header`

    margin-bottom: 20px;
    display: inline-grid;
    grid-template-columns: 1fr 4fr 1fr; /* ( fr - unidade fracional ) A proporção será de 1/4 */

    /*grid-template-columns: repeat(3, 1fr); - a mesma coisa de grid-template-columns: 1fr, 1fr, 1fr*/
    background-color: #00A859;
    width: 100%;

    /* # justify-content
       Justifica os itens do grid em relação ao eixo x (horizontal). 
    */

    align-items: center;

    img {
        width: 40px;
        height: 50px;
        margin: 0 auto;
        padding: 5px;
    }

    h3 {
        text-align: center;
        color: #fff;
        padding: 10px;
    }

    button {
        border: none;
        background-color: #00A859;
        cursor: pointer;
    }
 
`