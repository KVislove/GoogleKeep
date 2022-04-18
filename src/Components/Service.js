import axios from "axios"

export const Service={
     insertNote(data){
        return axios.post(process.env.REACT_APP_BASE_URL+"/notes",data);
    },

    fetchNotes(){
        return axios.get(process.env.REACT_APP_BASE_URL+"/notes");
    },
    deleteNote(id){
        return axios.delete(`${process.env.REACT_APP_BASE_URL}/notes/${id}`);
    }
}