export function handleError({ event, error }) {
	console.error(error.stack);
    return {
        message: error.stack
    }
}