const baseUrl:string = 'http://localhost:3001/api/v1'

export async function createUser(body: object) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const answer = await fetch(`${baseUrl}/users`, options)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .then(response => {
            return response
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    return answer
}
