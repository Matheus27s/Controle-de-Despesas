import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../../services/api';

//Contexts
import { useAuth } from '../../../../context/auth';
import { useRecipe } from '../../../../context/recipe';

import { ContainerHeader, Overflow } from './style';

export default function Header() {

  const { user } = useAuth();
  const { setRecipe } = useRecipe();
  const [ recipes, setRecipes ] = useState([]); 

  useEffect(() => {

    const getRecipes = async () => {
      const { data } = await api.get(`users/${ user.id }`)
      
      console.log(data.recipes)

      data.recipes.map( item => {

        if( format( item.dateMonth, "MMMM", { locale: pt }) === format( new Date(), "MMMM", { locale: pt })) {
          return setRecipe( item )
        }
        return null
      })
      
      setRecipes(data.recipes)
    }

    getRecipes();
  },[ user, setRecipe ])

  function switchRecipe( recipe ) {
    setRecipe(recipe)
  };

  return(  
    <ContainerHeader >
      <Overflow>
        <ul>
          
          { recipes.map( item => ( 
            <li onClick={ () => switchRecipe( item ) } 
              key={ item.id }>{ format(item.dateMonth, "MMM", { locale: pt }) }
            </li>
          ))}

        </ul>
      </Overflow>
    </ContainerHeader>
  );
}