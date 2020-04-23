import React, { useEffect, useState } from 'react';

import { ContainerHeader } from './style';
import { useRecipe } from '../../../../context/Recipe';
import api from '../../../../services/api';

export default function Footer() {

    const id = localStorage.getItem('id');
    const [ recipes, setRecipes ] = useState([]);
    const { setRecipe } = useRecipe();

    useEffect( () => {
        allRecipes();
    },[ id ])

    async function allRecipes() {
        const response = await api.get(`users/${ id }`);
        setRecipes(response.data.recipes);
        setRecipe(response.data.recipes[0]);
    }

    return(     
        <ContainerHeader >
            <h2>800,00 / 1.200,00 $</h2>
        </ContainerHeader>
    );
}