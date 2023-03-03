import axios from "axios";
//axios c'est une bibliotheque pour envoyer des requetes http vers la partie backend
const http=axios.create({
    baseURL:"http://localhost:7777",
    headers:{"content-type":"application/json"}
})

export default http