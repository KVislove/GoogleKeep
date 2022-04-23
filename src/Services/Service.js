import axios from "axios"

export const Service={
     insertNote(data, userId){
        return axios.post(`${process.env.REACT_APP_BASE_URL}/notes-api/user/${userId}/notes`,data);
    },

    fetchNotes(userId){
        return axios.get(`${process.env.REACT_APP_BASE_URL}/notes-api/user/${userId}/notes`);
    },
    deleteNote(noteId,userId){
        return axios.delete(`${process.env.REACT_APP_BASE_URL}/notes-api/user/${userId}/notes/${noteId}`);
    },
    login(data){
        return axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`,data);
    }
}