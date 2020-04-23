import React, { useEffect, useState } from 'react';

import { ContainerHeader, Overflow } from './style';
import { useRecipe } from '../../../../context/Recipe';
import api from '../../../../services/api';

export default function Header() {

    const id = localStorage.getItem('id');
    const [ recipes, setRecipes ] = useState([]);
    const { setRecipe } = useRecipe();

    useEffect( () => {
        allrecipes();
    },[ id ])

    async function allrecipes() {
        const response = await api.get(`users/${ id }`);
        setRecipes(response.data.recipes);
        setRecipe(response.data.recipes[0]);
    }

    async function switchRecipe( recipe ) {
        setRecipe(recipe);        
    }

    return(     
        <ContainerHeader >

            <Overflow>
                <ul>
                    { recipes.map( item => (
                        <li onClick={() => switchRecipe(item) } key={item.id}>{ item.data }</li>
                    ))}
                </ul>
            </Overflow>

        </ContainerHeader>
    );
}