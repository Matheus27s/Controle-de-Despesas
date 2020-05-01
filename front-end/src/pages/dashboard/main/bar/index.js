import React, { useState, useEffect } from 'react';

import { ContainerProgress } from './style';
import Bars from '../../../../components/chart/bar';
import { useRecipe } from '../../../../context/Recipe';
import api from '../../../../services/api';

export default function Bar() {

    const [ status, setStatus ] = useState([]); 
    const { recipe } = useRecipe();

    useEffect( ()=> {

        async function statusBar() {

            if( recipe.id ) {
                const response = await api.get(`status/${ recipe.id }`)
                setStatus(response.data)
            }
        }

        statusBar();
    }, [])

    return(

        <ContainerProgress>
            <Bars status={ status }/>
        </ContainerProgress>

    );

}
