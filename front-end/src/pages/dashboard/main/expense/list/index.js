import React, { useState, useEffect } from 'react';

import { MoveList, ContainerLeft, ContainerCenter, ContainerRight, Overflow } from './style';
import { useRecipe } from '../../../../../context/Recipe';

import { format } from 'date-fns';

import { FiChevronsDown, FiX } from 'react-icons/fi';

export default function List() {

    const [ moves, setMoves ] = useState([]);
    const { recipe } = useRecipe();

    useEffect( () => {
        allMoves();
    },[ recipe ])

    async function allMoves() {
        setMoves(recipe.moves || [])
    }

    return(
        <Overflow>
            <MoveList >
                   { moves.map( item => (

                        <li key={ item.id }>
                            <ContainerLeft>

                                <FiChevronsDown color="red"/>
                                <div>
                                    <strong>{ item.name }</strong>
                                    <p>{ item.category.name }</p>
                                </div>

                            </ContainerLeft>

                            <ContainerCenter>
                                    <h2>{ format(item.data, "dd/MM") }</h2>
                            </ContainerCenter>

                            <ContainerRight>
                                <p>-</p>
                                    <strong>{ item.value },00</strong>
                                    <a href="#"><FiX /></a>
                            </ContainerRight>
                            </li>
                    ))}
               </MoveList>
            </Overflow>
    );
}
