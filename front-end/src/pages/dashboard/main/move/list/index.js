import React, { useState, useEffect } from 'react';

import { MoveList, ContainerLeft, ContainerCenter, ContainerRight, Overflow } from './style';
import { useRecipe } from '../../../../../context/Recipe';

import { format } from 'date-fns';

import { FiChevronsDown, FiChevronsUp, FiX } from 'react-icons/fi';

export default function List() {

    const [ moves, setMoves ] = useState([]);
    const { recipe } = useRecipe();

    useEffect( () => {

        async function allMoves() {
            setMoves(recipe.moves || [])
        }

        allMoves();
    },[ recipe ])

    

    return(
        <Overflow>
            <MoveList >
                { moves.map( item => (( 
                    item.typeMove === 2 ? ( 
                        <li key={ item.id }>

                            <ContainerLeft>

                                <FiChevronsDown color="red"/>
                                <div>
                                    <strong>{ item.name }</strong>
                                    <p>{ item.category.name }</p>
                                </div>

                            </ContainerLeft>

                            <ContainerCenter>
                                    <h2>{ format(item.paymentDate, "dd/MM") }</h2>
                            </ContainerCenter>

                            <ContainerRight>
                                <p></p>
                                    <strong style={{ color: 'red' }}>{ item.value },00</strong>
                                    <FiX color="grey" />
                            </ContainerRight>
                        
                        </li>
                    ) : (
                        <li key={ item.id }>

                            <ContainerLeft>

                                <FiChevronsUp color="blue"/>
                                <div>
                                    <strong>{ item.name }</strong>
                                    <p>{ item.category.name }</p>
                                </div>

                            </ContainerLeft>

                            <ContainerCenter>
                                    <h2>{ format(item.paymentDate, "dd/MM") }</h2>
                            </ContainerCenter>

                            <ContainerRight>
                                <p></p>
                                    <strong style={{ color: 'blue' }}>{ item.value },00</strong>
                                    <FiX color="grey" />
                            </ContainerRight>

                        </li>
                )
                )))}

                       
            </MoveList>
        </Overflow>
    );
}