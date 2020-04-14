import React, { useState } from 'react';
import Pies from '../../../../components/chart/pie';
import { ContainerPie } from './style';
import { useSalary } from '../../../../context/Salary';
import api from '../../../../services/api';
import { useEffect } from 'react';

export default function Pie() {

    const [ status, setStatus ] = useState([]); 
    const { salary } = useSalary();

    useEffect( ()=> {
        statusPie();
    }, [ salary ])

    async function statusPie() {

        if( salary.id ) {
            const response = await api.get(`status/${ salary.id }`)
            setStatus(response.data)
        }
    }

    return(

        <ContainerPie>
            <Pies status={ status }/>
        </ContainerPie>

    );
}