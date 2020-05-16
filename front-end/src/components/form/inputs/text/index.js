import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputText } from './style';

export default function Input({ name, ...rest }) {

    const { fieldName, registerField, defaultValue, error } = useField(name);
    
    const inputRef = useRef(null);

    useEffect(() => {

        registerField({
            name: fieldName, ref: inputRef.current, path: 'value'
        }) 

    },[ fieldName, registerField ])

    return (
       <>
            <InputText 
                ref={ inputRef } 
                defaultValue={ defaultValue } 
                { ...rest }
            />
             
            { error && <span style={{ color: 'red' }}>{ error }</span> }
       </>
    );
}
