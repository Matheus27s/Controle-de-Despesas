import React from 'react';

import './button-logout.css';

export default function ButtonLogout( { history } ) {

    function logout() {
        alert('Logout!!');
    }

    return (
        <button onClick={ logout } className="btn-logout">OK</button>
    );

}