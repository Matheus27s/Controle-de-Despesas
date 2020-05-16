import React, { useState, useEffect } from 'react';

import api from '../../../../services/api';

//Contexts:
import { useRecipe } from '../../../../context/recipe';

//Components:
import Bars from '../../../../components/chart/bar';

import { ContainerProgress } from './style';

export default function Bar() {

  const { recipe } = useRecipe();
   
  const [ status, setStatus ] = useState([]); 
   useEffect( ()=> {

  async function statusBar() {

      if( recipe.id ) {
        const response = await api.get(`status/${ recipe.id }`)
          setStatus(response.data)
        }
      }

     statusBar();
    }, [ recipe ])

    return(

      <ContainerProgress>
          <Bars status={ status }/>
        </ContainerProgress>
    );

}
