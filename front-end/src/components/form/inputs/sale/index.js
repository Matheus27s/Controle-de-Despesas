import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Sale } from './style';

export default function InputSale({ name, ...rest }) {

    const currencyRef = useRef(null);

    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {

        registerField({
            name: fieldName, 
            ref: currencyRef.current, 
            path: 'props.value',
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
                value={0}
            />
            
            { error && <span style={{ color: 'red' }}>{ error }</span> }
       </>
    );
}
