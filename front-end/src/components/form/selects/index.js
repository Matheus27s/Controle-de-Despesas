import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import ReactSelect, { Props as SelectProps } from 'react-select';

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '100%',
        marginTop: 16,
        marginButton: 16,
        fontSize: 16,
        borderRadius: 5
    }),

    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'green' : '#666',
        fontSize: 16,
    }),

    indicatorsContainer: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'red' : 'green',
    }),

    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'red' : 'green',
    }),
  }

export default function Select({ name, ...rest }) {

    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {

        registerField({

          name: fieldName,
          ref: selectRef.current,
          path: 'state.value',

          getValue: ( ref ) => {

            if (rest.isMulti) {
              if (!ref.state.value) {
                return [];
              }
              return ref.state.value.map(( option ) => option.value);
            } else {
              if (!ref.state.value) {
                return '';
              }
              return ref.state.value.value;
            }
          },
        });
      }, [ fieldName, registerField, rest.isMulti ]);



    return (
        <ReactSelect
            defaultValue={ defaultValue }
            ref={ selectRef }
            classNamePrefix="react-select"
            { ...rest }
            styles={ customStyles }

    />
    );
}