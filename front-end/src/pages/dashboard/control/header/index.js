import React, { useEffect, useState, useCallback } from 'react';

import { ContainerHeader, Overflow } from './style';
import { useRecipe } from '../../../../context/recipe';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useAuth } from '../../../../context/auth';
import api from '../../../../services/api';

export default function Header() {

  const { user } = useAuth();
  const { setRecipe } = useRecipe();
  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {

    const getRecipes = async () => {
      const { data } = await api.get(`users/${ user.id }`)
      setRecipes(data.recipes)
    }

    getRecipes();

  },[])

  function switchRecipe( recipe ) {
    setRecipe(recipe)
  };

  return(  

    <ContainerHeader >
      <Overflow>
        <ul>
          
          { recipes.map( item => ( 
            <li onClick={ () => switchRecipe( item ) } 
              key={ item.id }>{ format(item.dateMonth, "MMMM", { locale: pt }) }
            </li>
          ))}

        </ul>
      </Overflow>
    </ContainerHeader>

  );
}