import React, { useEffect, useState } from 'react';

import { ContainerHeader, Overflow } from './style';
import { useRecipe } from '../../../../context/Recipe';
import api from '../../../../services/api';

import { format } from 'date-fns';

export default function Header() {

    const id = localStorage.getItem('id');
    const [ recipes, setRecipes ] = useState([]);
    const { recipe, setRecipe } = useRecipe();

    useEffect( () => {
        
        async function getNowRecipe() {

            let now = new Date()
            const response = await api.get(`users/${ id }`);

            response.data.recipes.map( item => {
            
                if(format(item.dateMonth, "MM/yyyy" ) === format(now.getTime(), "MM/yyyy")) {
                    setRecipe( item );
                }

                return true;
            });
        }

        getNowRecipe();

    }, [ id ])

    useEffect( () => {

        async function allrecipes() {
            const response = await api.get(`users/${ id }`);
            setRecipes(response.data.recipes);
        }

        allrecipes();
    },[ recipe ])

    function switchRecipe( recipe ) {
        setRecipe(recipe);        
    }

    return(     
        <ContainerHeader >

            <Overflow>
                <ul>
                    { recipes.map( item => (
                        <li onClick={() => switchRecipe(item) } key={item.id}>{ format(item.dateMonth, "dd/MM/yyyy") }</li>
                    ))}
                </ul>
            </Overflow>

        </ContainerHeader>
    );
}