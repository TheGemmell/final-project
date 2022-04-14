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

export async function loginUser(body: object) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    const answer = await fetch(`${baseUrl}/login`, options)
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

export async function getWorkouts(token: string) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    }

    const answer = fetch(`${baseUrl}/workouts`, options)
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

export async function getExercises(token: string, workoutId: number) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    }

    const answer = fetch(`${baseUrl}/workouts/${workoutId}`, options)
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