import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext({
    recipe: {},
});

export const RecipeProvider = ({ children }) => {

    const [ recipe, setRecipe ] = useState({});

    return (
        <RecipeContext.Provider value={{ recipe, setRecipe }}>
            { children }
        </RecipeContext.Provider>
    );
}

export function useRecipe() {
    const context = useContext(RecipeContext);
    return context;
}