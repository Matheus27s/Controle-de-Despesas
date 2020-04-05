import React, { useState, useEffect } from 'react';
import { useSalary } from '../../../../context/Salary';
import api from '../../../../services/api';

import { ContainerProgress } from './style';
import Bars from '../../../../components/chart/bar';

export default function Bar() {

    const { salary } = useSalary();
    const [ status, setStatus ] = useState([]); 

     useEffect(() => {
        switchStatus();
    }, [])

    async function switchStatus() {
    }

    return(

        <ContainerProgress>
            <Bars salaryStatus={ status }/>
        </ContainerProgress>

    );

}
