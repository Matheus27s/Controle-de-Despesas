import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import api from '../../../../../services/api';
import { formatMoney } from '../../../../../util/formatMoneyValue';

//Contexts:
import { useRecipe } from '../../../../../context/recipe';

import { MoveList, ContainerLeft, ContainerCenter, ContainerRight, Overflow } from './style';
import { FiChevronsDown, FiChevronsUp, FiX } from 'react-icons/fi';

export default function List() {

    const { recipe } = useRecipe();
    const [ moves, setMoves ] = useState([]);

    useEffect( () => {

        async function allMoves() {
            setMoves(recipe.moves || [])
        }

        allMoves();

    },[ recipe ]);

   const removeMove = async (id) => {
       await api.delete(`moves/${id}`);
       setMoves(recipe.moves);
       document.location.reload(true);
   }


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
                                <p> 
                                    dia { format(item.paymentDate, "dd")}
                                </p>
                                </ContainerCenter>

                                <ContainerRight>
                                    <p></p>
                                    <strong 
                                        style={{ color: 'red' }}>
                                            { formatMoney( item.value ) }

                                    </strong>
                                    <FiX 
                                        color="#666" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={ () => removeMove(item.id) }
                                    />
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
                                        <p>
                                            dia { format(item.paymentDate, "dd") }
                                        </p>
                                </ContainerCenter>

                                <ContainerRight>
                                    <p></p>
                                    <strong 
                                        style={{ color: 'blue' }}>
                                            { formatMoney( item.value ) }
                                            
                                    </strong>                                    <FiX 
                                        style={{ cursor: "pointer" }} 
                                        color="#666" 
                                        onClick={ () => removeMove(item.id) }
                                    />
                                </ContainerRight>

                            </li>
                    )
                    )))}

                        
                </MoveList>
        </Overflow>
    );
}