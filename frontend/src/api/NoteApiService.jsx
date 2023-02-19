
const baseUrl = "http://localhost:8081";
// Modify baseUrl for production
const fetchAbsolute = (url, ...params) => fetch(`${baseUrl}${url}`, ...params);

export const retrieveAllNotes = () => {
    return fetchAbsolute("/notes");
}

export const createNewNote = (data) => {
    return fetchAbsolute('/notes', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}