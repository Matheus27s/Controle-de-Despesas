import React, { useState,useEffect, useRef } from "react";
import { useField } from '@unform/core';
import ImageUploader from "react-images-upload";
import { Base64 } from 'js-base64';

import './style.css'

const buttonStyles = {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#29B573',
    border: 'none',
    borderRadius: 3,
    cursor: 'pointer',
    transitionDuration: '0.2s',
    color: 'rgba(0,0,0,0.4)',
}

const labelStyles = {
    padding: 16,
    fontWeight: 'bold',
}

const fileContainerStyle = {
    borderRadius: 5,
    boxShadow: 'none',
    display: 'flex'
}

export default function Upload({ name, ...rest }) {

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const inputRef = useRef(null);

  const onDrop = () => {

    registerField({
        name: fieldName,
        ref:  inputRef.current,
        path: 'state.pictures[0]'
    })

  };

  return (
            <ImageUploader
                ref={ inputRef }
                defaultValue={ defaultValue }
                withIcon={true}
                buttonText='Foto'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                name="upload"
                buttonStyles={ buttonStyles }
                labelStyles={ labelStyles }
                fileContainerStyle={ fileContainerStyle }
                withLabel={true}
                label={'Tamanho máximo da foto: 5mb. Aceitado: jpg, gif, png'}
                fileSizeError={'Tamanho muito grande'}
                fileTypeError={'Essa extenção não é suportada'}
                singleImage={true}
                
            />
        );
}