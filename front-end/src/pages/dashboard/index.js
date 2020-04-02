import React, { useState, useEffect } from 'react';

import { 

    ContainerDashboard, 
    Header, 
    Article, 
    Footer,
    ContainerExpenses,
    StatusPie, 
    StatusProgress, 
    AddExpense, 
    ExpenseList,
    LoginInput

} from './style';

import { 
    FiChevronRight, 
    FiChevronLeft, 
    FiX, 
    FiChevronsUp, 
    FiChevronsDown,
    FiArrowUp,
    FiUser,
    FiPieChart,
    FiBarChart

} from 'react-icons/fi';

import logoSingle from '../../img/logo-single.svg';
import { 
        BarChart, 
        PieChart, 
        LineChart,
        ColumnChart
    } from 'react-chartkick';

import 'chart.js'

import { Link } from 'react-router-dom';

import Pie from '../../components/chart/pie';
import Bar from '../../components/chart/bar';


import api from '../../services/api'
import logo from '../../img/logo.svg';

export default function Dashboard() {

    return (
        <ContainerDashboard>
            <Header >

                <FiChevronLeft size={ 50 } color="#c4c4c4"/>

                <div>
                    <ul>
                        <li><Link>01 / 2020</Link></li>
                        <li><Link>02 / 2020</Link></li>
                        <li><Link>03 / 2020</Link></li>
                        <li><Link>04 / 2020</Link></li>
                        <li><Link>05 / 2020</Link></li>
                    </ul>
                </div>

                <FiChevronRight size={ 50 } color="#c4c4c4"/>

            </Header>

            <Article>
                <ContainerExpenses>

                    <ExpenseList>

                        <li>
                            <h1><FiChevronsDown color="red"/></h1>

                            <div>
                                <strong>Cinema</strong>
                                <p>Lazer</p>
                            </div>

                            <h2>01/03</h2>
                            <strong>R$ 200,00</strong>
                            <FiX size={ 25 } color="C4C4C4"/>
                        </li>

                        <li>
                            <h1><FiChevronsDown color="red"/></h1>

                            <div>
                                <strong>Cinema</strong>
                                <p>Lazer</p>
                            </div>

                            <h2>01/03</h2>
                            <strong>R$ 200,00</strong>
                            <FiX size={ 25 } color="C4C4C4"/>
                        </li>

                        <li>
                            <h1><FiChevronsDown color="red"/></h1>

                            <div>
                                <strong>Cinema</strong>
                                <p>Lazer</p>
                            </div>

                            <h2>01/03</h2>
                            <strong>R$ 200,00</strong>
                            <FiX size={ 25 } color="C4C4C4"/>
                        </li>

                    </ExpenseList>


                    <AddExpense>

                        <LoginInput 
                            type="text" 
                            placeholder="Login" 
                            id="login" 
                            name="login" 
                            required
                        />

                        <LoginInput 
                            type="text" 
                            placeholder="Login" 
                            id="login" 
                            name="login" 
                            required
                        />

                        <LoginInput 
                            type="text" 
                            placeholder="Login" 
                            id="login" 
                            name="login" 
                            required
                        />

                        <LoginInput 
                            type="text" 
                            placeholder="Login" 
                            id="login" 
                            name="login" 
                            required
                        />

                        <button>
                            <FiArrowUp size={ 25 } color="#48887B"/>
                        </button>

                    </AddExpense>


                </ContainerExpenses>
                
                <StatusPie>
                    <Pie/>
                </StatusPie>
                
                <StatusProgress>
                    <Bar />
                </StatusProgress>
            </Article>

            <Footer>

                <div>
                    <img src={ logoSingle }/>
                    <h1>$ 870,00 / 1.700,00</h1>
                    <FiUser size={ 30 } color=""/>
                </div>
            </Footer>

        </ContainerDashboard>
    );
}
