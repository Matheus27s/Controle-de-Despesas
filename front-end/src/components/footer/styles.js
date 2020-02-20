import styled from 'styled-components';

export const Footers = styled.footer`


    background-color: #00A859;
    position: fixed;
    top: 93%;
    width: 100%;
    text-align: center;

    h2 {
        color: #fff;
        padding: 8px;
        box-shadow: 2px -2px 5px rgba(0,0,0,0.4);
        width: 100%;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    @media( max-width: 800px ) {
        footer.footer {
            gap: 20%;
        }
    }
 
`