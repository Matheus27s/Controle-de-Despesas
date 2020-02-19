import React from 'react';

import btnPlux from '../../img/plus-btn.png';

import './button.css';

export default function Button( { addExpense } ) {

    return (
        <button onClick={ addExpense } className="btn-plux">+</button>
    );

}