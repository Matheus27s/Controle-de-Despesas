import React, { useEffect, useState, useCallback } from 'react';

import { ContainerHeader, Overflow } from './style';
import { useRecipe } from '../../../../context/Recipe';

import api from '../../../../services/api'

import { format } from 'date-fns';

export default function Header() {

    const id = localStorage.getItem('id')

    const [ recipes, setRecipes ] = useState([]);
    const { recipe, setRecipe } = useRecipe();

    const getRecipes = useCallback( async () => {
        console.log("-- GET RECIPES --")
        const { data } = await api.get(`users/${ id }`);
        setRecipes(data.recipes);
    }, []);

    useEffect(() => {
        getRecipes();
    },[ getRecipes ]) 

    function getNowRecipe() {

        let now = new Date()

            recipes.map( item => {
            
                if(format(item.dateMonth, "MM/yyyy" ) === format(now.getTime(), "MM/yyyy")) {
                    setRecipe( item );
                }
            });
        
    }

    function switchRecipe( recipe ) {
        setRecipe(recipe);        
    }

    return(     
        <ContainerHeader >
            <Overflow>
        <ul>
            { recipes.map( item => <li onClick={ () => switchRecipe( item ) } key={ item.id }>{ format(item.dateMonth, "MM/yyyy") }</li> ) }
        </ul>
        </Overflow>
        </ContainerHeader>
    );
}