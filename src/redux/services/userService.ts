import axios from "axios";


axios.defaults.baseURL='http://localhost:8080/api/users'


export const signIn= async(email: string): Promise<any>=>{
    const response= await axios.post(`/findByEmail${email}`)
    return response.data;
}