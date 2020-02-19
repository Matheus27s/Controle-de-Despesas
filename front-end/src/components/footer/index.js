import React from 'react';

import './footer.css';

export default function Footer( { salaryAtual, salary, history  } ) {

    function statusSalary() {
        history.push(`/state-salary/${ salary.id }`);
    }

    return(
        <footer className="footer">
            <h2><a href="#" onClick={ statusSalary }>{ salary.value } / { salaryAtual }</a></h2>
        </footer>

    );
}