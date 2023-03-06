
// const baseUrl = "http://localhost:8081";

import { json } from "react-router-dom";

// const baseUrl = "http://localhost:8080";
function customApiClient(){
    this.baseUrl = '',
    this.apiConfig = {
        headers: {},
    },
    this.apiFetch = async(...args) => {
        let [resource, config] = args;
        resource = this.baseUrl + resource;
        // Add custom config present in this api client
        Object.keys(this.apiConfig).forEach(key => {
            if (key === "headers") {
                Object.keys(this.apiConfig.headers).forEach(key => {
                    config["headers"] = {...config["headers"]};
                    config["headers"][key] = this.apiConfig.headers[key];
                })
            } else {
                config[key] = this.apiConfig[key];
            }
            
        });
        let response = await fetch(resource,config);
        if (!response.ok && response.status === 404) {
            return Promise.reject(response);
        }
        return response
    }  
}

export const apiClient = new customApiClient();
apiClient.baseUrl = 'http://localhost:8080'


export const excecuteBasicAuthentication = (token) => {
    return fetch(`http://localhost:8080/basicauth`, {
        method: "GET",
        headers: {
            Authorization: token
        }
    })
}
// Modify baseUrl for production
//const fetchAbsolute = (url, ...params) => fetch(`${baseUrl}${url}`, ...params);

export const retrieveAllNotes = (username) => {
    // return fetchAbsolute("/notes");
    return apiClient.apiFetch(`/users/${username}/notes`, {
        method: "GET",
    })
}

export const createNewNote = (username, data) => {
    console.log("New Note created: ");
    console.log("Username:" + username);
    console.log(data);
    return apiClient.apiFetch(`/users/${username}/notes`, {
        method: "POST",
        headers: {
            'Content-type': 'Application/json',
        },
        body:JSON.stringify(data),
    })
    // return fetch(`http://localhost:8080/users/${username}/notes`, {
    //     method: "POST",
    //     headers: {
    //         'Content-type': 'Application/json',
    //         Authorization: "Basic Ym9iOmJvYjEyMw=="
    //     },
    //     body:JSON.stringify(data),
    // })
}

export const updateNoteApi= (username,id, data) => {
    console.log("Note updated");
    console.log(data);
    return apiClient.apiFetch(`/users/${username}/notes/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
        },
        body:JSON.stringify (data),
    })
}

export const deleteNoteApi= (username, id) => {
    return apiClient.apiFetch(`/users/${username}/notes/${id}`, {
        method: "DELETE",
    })
}