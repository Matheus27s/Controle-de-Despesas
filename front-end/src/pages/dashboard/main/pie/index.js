import React, { useState, useEffect } from 'react';
import Pies from '../../../../components/chart/pie';
import { useSalary } from '../../../../context/Salary';
import { ContainerPie } from './style';
import api from '../../../../services/api';

export default function Pie() {

    const { salary } = useSalary();
    const [ status, setStatus ] = useState([]); 

     useEffect(() => {
        switchStatus();
    }, [salary])

    async function switchStatus() {
    }

    return(

        <ContainerPie>
            <Pies salaryStatus={ status }/>
        </ContainerPie>

    );
}