import axios from "axios";

export const reqResapApi = axios.create({
    baseURL:'/files'
})