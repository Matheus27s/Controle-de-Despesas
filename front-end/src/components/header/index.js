import React, { useEffect, useState, useCallback } from 'react';

import { ContainerHeader, ContainerUser } from './style';

import logo from '../../img/logo-single.svg';
import api from '../../services/api';

import { useUser } from '../../context/User';

export default function Header() {

    //const id = localStorage.getItem('id');
    //const { user, setUser } = useUser();

    //const getUser = useCallback( async() => {
      //  console.log("-- GET USER --")
       // const { data } = await api.get(`users/${ id }`);
        //setUser(data);
    //}, []);

    //useEffect(() => {
      //  getUser();
    //}, [ getUser ])

    return(     
        <ContainerHeader >
            <img src={ logo } alt="logo"></img>
            
            <ContainerUser>
                <strong>{ "user.name" }</strong>
                <div></div>
            </ContainerUser>
        </ContainerHeader>
    );
}