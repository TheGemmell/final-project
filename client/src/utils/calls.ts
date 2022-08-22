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

export async function getExercises(token: string, workoutId: string | number) {
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

export async function updateExercise(token: string, exerciseId: string | number, body: any) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }

    const answer = fetch(`${baseUrl}/exercises/${exerciseId}`, options)
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

export async function deleteWorkout(token: string, workoutId: string | number) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    }

    const answer = fetch(`${baseUrl}/workouts/${workoutId}`, options)
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response
            }
            throw response
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    return answer
}

export async function createWorkout(token: string, body: any) {
    console.log(token, body)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    }

    const answer = fetch(`${baseUrl}/workouts`, options)
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json()
            }
            throw response
        })
        .catch(err => {
            console.log(err)
            return Promise.reject(err)
        })
    return answer
}