import axios from "axios";

export default function requist (){ 


const Axios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ,
})
return {Axios}
}
 