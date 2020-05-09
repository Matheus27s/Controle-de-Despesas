import React, { useState } from 'react';
import Pies from '../../../../components/chart/pie';
import { ContainerPie } from './style';
import { useRecipe } from '../../../../context/recipe';
import api from '../../../../services/api';
import { useEffect } from 'react';

export default function Pie() {

    const [ status, setStatus ] = useState([]); 
    const { recipe } = useRecipe();

    useEffect( ()=> {

        async function statusPie() {

            if( recipe.id ) {
                const response = await api.get(`status/${ recipe.id }`)
                setStatus(response.data)
             }
      }

         statusPie();
         }, [ recipe ])

    return(

       <ContainerPie>
           <Pies status={ status }/>
        </ContainerPie>
    );
}