import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@unform/core';

import pt from 'date-fns/locale/pt';

import { Picker } from './style';

export default function DatePicker({ name, ...rest }) {

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

  const datepickerRef = useRef(null);

  useEffect(() => {

    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref) => {
        ref.clear();
      },
    });

  }, [ fieldName, registerField ]);

  return (

    <>
      <Picker
        ref={datepickerRef}
        selected={date}
        onChange={ date => setDate(date)}
        {...rest}
        dateFormat="dd/MM/yyyy"
        locale={ pt }
    />
      
      { error && <span style={{ color: 'red' }}>{ error }</span> }
    </>

  );
};