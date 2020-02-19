import React, { Component } from 'react';

import { Title, TitleSmall } from './style';

class Login extends Component {

    render() {

        return (

            <>
                <Title fontSize={ 20 }>
                    Login
                    <span>Texto menor</span>
                </Title>

                <TitleSmall>
                    Menor
                </TitleSmall>
            </>

        )
    }
}

export default Login;