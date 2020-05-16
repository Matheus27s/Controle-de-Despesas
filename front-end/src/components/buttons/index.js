import React from 'react';

import { Button } from './style';

export default function ButtonDefault({ children, ...rest }) {

    return (
       <>
        <Button { ...rest }>{ children }</Button> 
       </>
    );
}
