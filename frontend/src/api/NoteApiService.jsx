
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
            'Content-type': 'application/json',
        },
        body:JSON.stringify (data),
    })
}

export const updateNoteApi= (id, data) => {
    return fetchAbsolute(`/notes/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
        },
        body:JSON.stringify (data),
    })
}

export const deleteNoteApi= (id) => {
    return fetchAbsolute(`/notes/${id}`, {
        method: "DELETE",
    })
}