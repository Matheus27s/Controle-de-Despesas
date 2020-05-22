
export function formatMoney( value ) {
    
    return (value ? value : 0 ).toLocaleString('pt-BR',{ 
        style: 'currency', 
        currency: 'BRL' 
    });
    
}