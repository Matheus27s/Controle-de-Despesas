// Simula a nossa API

export function signIn() {
    return new Promise( resolve => {
        setTimeout( () => {

            resolve({

                token: 'k35h45kh54k5h345k45hhhhk345h3hk45h4k53h5k3h54h43k',
                user: {
                    name: 'Matheus Sousa',
                    email: 'matheus@hotmail.com',
                }

            })
        }, 2000);
    })
}