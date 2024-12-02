import axios from "axios";
import { UserData } from "../../models/UserData";


axios.defaults.baseURL='http://localhost:8080/api'


export const signIn= async(email: String): Promise<any>=>{
    console.log("service---------",email);
    const response= await axios.post('/users/findByEmail',{email});
    console.log(response.data,"after post==========");
    return response.data;
}

export const signUp=async(user:UserData):Promise<any>=>{
    // console.log("sign up-service");
    console.log("user in service ",user);
    const response=await axios.post('/users/createNewUser',user);
    console.log(response.data, "signup response");
    return response.data;
}