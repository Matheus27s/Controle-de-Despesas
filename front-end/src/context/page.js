import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext({
    page: '',
    handlePage: () => {}
});

export const PageProvider = ({ children }) => {

    const [ page, setPage ] = useState('');

    const handlePage = (page) => {
        setPage(page);
    }

    return(
        <PageContext.Provider value={{ page , handlePage }}>
            { children }
        </PageContext.Provider>
    );

};

export function usePage() {
    const context = useContext(PageContext);
    return context;
}