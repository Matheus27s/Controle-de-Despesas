import React, { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const RecipeContext = createContext();

export default function RecipeProvider({ children }) {

    const [ recipe, setRecipe ] = useState({});

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe }}>
            { children }
        </RecipeContext.Provider>
    );
}

export function useRecipe() {
    const context = useContext(RecipeContext);
    const { recipe, setRecipe } = context;
    return { recipe, setRecipe };
}