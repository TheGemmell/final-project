import { handleCallError } from './functions'

const baseUrl:string = 'http://localhost:3001/api/v1'

export function createUser(body: object) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    fetch(`${baseUrl}/users`, options)
        .then(response => {
            handleCallError(response)
            return response.json()
        })
        .then(response => {
            console.log(response)
        })
}
