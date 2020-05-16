import React from 'react';

//Contexts:
import { useAuth } from '../../context/auth';
import { usePage } from '../../context/page';

import { ContainerSideBar } from './style';

import { FiHome, FiClipboard, FiDollarSign, FiHash, FiArrowLeft } from 'react-icons/fi';

export default function SideBar() {

    const { signOut } = useAuth();
    const { handlePage } = usePage();

    const handleSignOut = () => {
        signOut();
    }

    return(
        <ContainerSideBar>
            <ul>
                <li>
                    <a onClick={() => handlePage('page01') }>
                        <FiHome 
                            size={ 32 } 
                        />
                    </a>
                </li>

                <li>
                    <a onClick={() => handlePage('page02') }>
                        <FiDollarSign 
                            size={ 32 } 
                        />
                    </a>
                </li>

                <li>
                    <a onClick={() => handlePage('page03') }>
                        <FiClipboard 
                            size={ 32 } 
                        />
                    </a>
                </li>

                <li>
                    <a onClick={() => handlePage('page04') }>
                        <FiHash 
                            size={ 32 } 
                        />
                    </a>
                </li>

                <li>
                    <a onClick={ handleSignOut }>
                        <FiArrowLeft 
                            size={ 32 }
                        />
                    </a>
                </li>
            </ul>
        </ContainerSideBar>
    );

}