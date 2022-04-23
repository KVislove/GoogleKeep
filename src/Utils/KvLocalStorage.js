export const KvLocalStorage={
    getUserInfo(){
        let userInfo= window.localStorage.getItem("userInfo");
        return JSON.parse(userInfo)
    },

    clear(){
        window.localStorage.clear()
    }
}