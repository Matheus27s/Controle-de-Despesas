import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Sale } from './style';

export default function InputSale({ name, ...rest }) {

    const { fieldName, registerField, defaultValue, error } = useField(name);

    const currencyRef = useRef(null);

    useEffect(() => {

        console.log(currencyRef.current)

        registerField({
            name: fieldName, 
            ref: currencyRef.current, 
            path: 'state.value',
            clearValue: (ref) => {
                ref.clear();
              },
        }) 

    },[ fieldName, registerField ])

    return (
       <>   
            <Sale 
                thousandSeparator={true} 
                prefix={'$ '} 
                fixedDecimalScale={true} 
                decimalScale={2}
                ref={ currencyRef }
                defaultValue={ defaultValue } 
                { ...rest }
            />
            
            { error && <span style={{ color: 'red' }}>{ error }</span> }
       </>
    );
}
