
const baseUrl = "http://localhost:8081";

const fetchAbsolute = (url) => fetch(baseUrl+url);

export const retrieveAllNotes = () => {
    return fetchAbsolute("/notes/");
}