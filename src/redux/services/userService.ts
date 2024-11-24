import axios from "axios";


axios.defaults.baseURL='http://localhost:8080/api'


export const signIn= async(email: String): Promise<any>=>{
    console.log("---------",email);
    const response= await axios.post('/users/findByEmail',{email});
    console.log(response.data,"==========");
    return response.data;
}