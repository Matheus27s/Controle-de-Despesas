import React, { useState, useEffect } from 'react';

import { ContainerProgress } from './style';
import Bars from '../../../../components/chart/bar';
import { useSalary } from '../../../../context/Salary';
import api from '../../../../services/api';

export default function Bar() {

    const [ status, setStatus ] = useState([]); 
    const { salary, setSalary } = useSalary();

    useEffect( ()=> {
        statusBar();
    }, [ salary ])

    async function statusBar() {

        if( salary.id ) {
            const response = await api.get(`status/${ salary.id }`)
            setStatus(response.data)
        }
    }

    return(

        <ContainerProgress>
            <Bars status={ status }/>
        </ContainerProgress>

    );

}
