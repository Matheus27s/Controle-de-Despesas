import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import pt from 'date-fns/locale/pt';

import "react-datepicker/dist/react-datepicker.css";
registerLocale('pt', pt);

export default function Calendar() {
   
    const [ startDate, setStartDate ] = useState(new Date());
 
    return (

      <DatePicker  
        locale="pt" 
        selected={ startDate } 
        onChange={ date => setStartDate(date) }
        dateFormat={'dd/MM/yyyy'}
        value = { startDate }
      />

    );
}