import React from 'react';
import { useAuth } from '../context/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import LoadingInfo from '../components/loading';

const Routes = () => {

    const { signed, loading } = useAuth();

    if( loading ) {
        return <LoadingInfo />
    }

    return signed ? <AppRoutes /> : <AuthRoutes/>;

}

export default Routes;