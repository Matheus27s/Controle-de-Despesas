import React, { createContext, useState, useContext } from 'react';

import api from '../services/api';
import { useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [ user, setUser ] = useState(0);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    const { user, setUser } = context;
    return { user, setUser };
}