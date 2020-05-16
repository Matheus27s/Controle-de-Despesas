import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@unform/core';

export default function DatePicker({ name, ...rest }) {

  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

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

    <ReactDatePicker
      ref={datepickerRef}
      selected={date}
      onChange={ date => setDate(date)}
      {...rest}
      dateFormat="dd/MM/yyyy"
      
    />

  );
};