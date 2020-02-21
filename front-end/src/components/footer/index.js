import React from 'react';

import { Footers } from './styles';

export default function Footer( { salaryAtual, salary, history  } ) {

    function statusSalary() {
        history.push(`/status/${ salary.id }`);
    }

    return(
        <Footers>
            <h2><a href="#" onClick={ statusSalary }>{ salary.value } / { salaryAtual }</a></h2>
        </Footers>

    );
}