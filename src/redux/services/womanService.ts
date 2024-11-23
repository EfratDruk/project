import axios from "axios";
import { Woman } from "../../models/woman";

axios.defaults.baseURL = 'http://localhost:8080/api/woman';

export const getWomen = async (): Promise<Woman[]> => {
    const response = await axios.get('/woman');
    return response.data;
};

export const getWomanById = async (id: number): Promise<Woman> => {
    const response = await axios.get(`/womanById/${id}`);
    return response.data;
};

export const createWoman = async (woman: Woman): Promise<Woman> => {
    const response = await axios.post('addWoman', woman);
    return response.data;
};

export const updateWoman= async(id:number, woman:Woman):Promise<Woman>=>{
    const response= await axios.put(`/updateWoman/${id}`, woman);
    return response.data;
};


export const deleteWoman = async (id: number): Promise<void> => {
    await axios.delete(`/deleteWoman/${id}`);
};