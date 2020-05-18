import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({ 

    signed: true, 
    user: {},
    signIn: () => {},
    signOut: () => {},

});

export const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        function loadStorageData() {
            
            const storagedUser = localStorage.getItem('@RNAuth:user');
            
            if( storagedUser ){ 
                setUser(JSON.parse(storagedUser));
            }
        }

        setLoading(false);
        loadStorageData();

    },[])

    async function signIn( login ) {

        const { data } = await api.post('sessions/', {
            login,
        })

        setUser(data);
        localStorage.setItem('@RNAuth:user', JSON.stringify(data));
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, loading ,user , signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );

};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}