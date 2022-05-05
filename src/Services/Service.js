import axios from "axios"

export const Service={
     insertNote(data, userId){
        return axios.post(`${process.env.REACT_APP_BASE_URL}/notes-api/users/${userId}/notes`,data);
    },

    fetchNotes(userId){
        return axios.get(`${process.env.REACT_APP_BASE_URL}/notes-api/users/${userId}/notes`);
    },
    deleteNote(noteId,userId){
        return axios.delete(`${process.env.REACT_APP_BASE_URL}/notes-api/notes/${noteId}`);
    },
    login(data){
        return axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`,data);
    },
    signUp(data){
        return axios.post(`${process.env.REACT_APP_BASE_URL}/users`,data);
    }
}