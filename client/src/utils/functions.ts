export function handleCallError(call: Response) {
    if (call.status !== 200) {
        console.log('Found Error! ', call.status)
    }
}